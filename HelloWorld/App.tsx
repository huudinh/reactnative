import HomeScreen from './components/review/Home';
import DetailScreen from './components/review/Detail';
import AboutScreen from './components/review/About';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANTS_REGULAR } from './assets/utils/const';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANTS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    
    if (!loaded && !error) {
        return null;
    }

    const RootStack = createNativeStackNavigator<RootStackParamList>({
        initialRouteName: 'Home',
        screens: {
            Home: {
                screen: HomeScreen,
                options: {
                    title: 'Trang chủ',
                },
            },
            Detail: {
                screen: DetailScreen,
                options: {
                    title: 'Chi tiết',
                },
            },
            About: AboutScreen,
        },
    });

    const Navigation = createStaticNavigation(RootStack);

    return <Navigation />;

    
}

export default App;