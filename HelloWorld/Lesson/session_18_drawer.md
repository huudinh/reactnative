# Drawer Navigator
**Mục tiêu**

- Tạo menu chứa trang chủ và trang about

- Custom lại Header cho đẹp hơn

- Sửa style trang chủ

**Cài đặt thư viện drawer**

Tài liệu: https://reactnavigation.org/docs/drawer-navigator

`npm install @react-navigation/drawer`

`npx expo install react-native-gesture-handler react-native-reanimated`

**Cài đặt thư viện stack**

Tài liệu: https://reactnavigation.org/docs/stack-navigator?config=dynamic

`npm install @react-navigation/stack`

`npx expo install react-native-gesture-handler`

Menu icon: https://icons.expo.fyi/Index

### Sửa file App

```jsx
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANTS_REGULAR } from './assets/utils/const';
import AppNavigation from './components/navigation/app.navigation';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;

```

### Thêm file navigation/app.navigation.tsx

```jsx
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
```

### Thêm file navigation/app.header

``` jsx
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from "../../assets/utils/const";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
    },
    headerText: {
        flex:1,
        textAlign: 'center',
        fontSize: 25,
    }
})

const AppHeader = () => {
    const navigation:any = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialIcons 
                name="menu" size={30} color="black" 
                onPress={() => navigation.openDrawer()}
            />
            <Text style={[styles.headerText, globalStyles.globalFont]}>App Header</Text>
        </View>
    )
}

export default AppHeader;

```

### Sửa file Home.tsx

```jsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

interface IReview{
    id: number;
    title: string;
    star: number;
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        margin: 15,

    }
})

const HomeScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();
    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: 'React Native', star: 5},
        {id: 2, title: 'Javascript', star: 5},
    ]);

    return (
        <View>
            <Text style={{ fontSize:30, paddingLeft:10 }} >Review list</Text>
            <View>
                <FlatList 
                    data={reviews}
                    keyExtractor={(item) => item.id + ""}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail', item)}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
```

*Bài tiếp theo [Images](session_19_images.md)*