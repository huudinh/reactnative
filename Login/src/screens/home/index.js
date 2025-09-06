import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserInfo from '../user_info';
import SettingScreen from '../settings';
import UserManage from '../user_manage';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator                    
            screenOptions={{
                headerShown: false,
                animation: 'shift',
                tabBarActiveTintColor: '#192f6a',
            }}
        >
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ color })=> <FontAwesome5 name="address-card" size={24} color={ color } />
                }}
                name="User Info" component={UserInfo} 
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ color })=> <FontAwesome5 name="user-cog" size={24} color={ color } />
                }}
                name="User Manage" component={UserManage} 
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ color })=> <FontAwesome5 name="cog" size={24} color={ color } />
                }}
                name="Settings" component={SettingScreen} 
            />
        </Tab.Navigator>
    )
}

export default HomeScreen;