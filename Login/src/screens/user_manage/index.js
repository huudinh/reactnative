import { View, Text, StyleSheet } from 'react-native';

const UserManage = () => {
    return (
        <View style={styles.container}>
            <Text>User Management</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default UserManage;