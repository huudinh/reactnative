import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../login';
import HomeScreen from '../home';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;