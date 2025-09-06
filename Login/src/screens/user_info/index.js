import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserInfo = () => {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('UserInfo')
            .then(result => {
                if (result){
                    setUserInfo(JSON.parse(result));
                }
            });

    }, []);

    const handleLogout = () => {
        // Xóa cache
        AsyncStorage.clear();

        // Chuyển đến màn hình Login
        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View>
                    <Text>ID: {userInfo.id}</Text>
                </View>
                <View>
                    <Text>Full Name: {userInfo.fullName}</Text>
                </View>
                <View>
                    <Text>Age: {userInfo.age}</Text>
                </View>
            </View>
            <View style={styles.logoutBox}>
                <TouchableOpacity 
                    style={styles.logout} 
                    onPress={handleLogout}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    profile: {
        padding: 20,
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 20,
    },
    logoutBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    logout: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ff5757',
        borderRadius: 10,
    }
});

export default UserInfo;