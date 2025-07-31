import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../review/Home';
import DetailScreen from '../review/Detail';
import AboutScreen from '../review/About';
import AppHeader from './app.header';


const HomeLayout = () => {
    const Stack = createStackNavigator();

    function MyStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ header: () => <AppHeader /> }}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={DetailScreen} 
                />
            </Stack.Navigator>
        );
    }
    return <MyStack />;
}

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            // screenOptions={{headerShown:false}}
        >
            <Drawer.Screen 
                name="Home1" component={HomeLayout} 
                options={{
                    title: 'Trang chủ',
                    header: () => <></>,
                }}
            />
            <Drawer.Screen 
                name="About" component={AboutScreen}
                options={{
                    title: 'Thông tin',
                    header: () => <AppHeader />,
                }}
            />
        </Drawer.Navigator>
    );
}

export default AppNavigation;