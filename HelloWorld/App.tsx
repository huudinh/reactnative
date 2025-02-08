import { View } from 'react-native';
import HomeScreen from './components/review/Home';
import DetailScreen from './components/review/Detail';
import AboutScreen from './components/review/About';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    
    if (!loaded && !error) {
        return null;
    }

    return (
        <View>
            <HomeScreen />
            <DetailScreen />
            <AboutScreen />
        </View>
    )
}

export default App;