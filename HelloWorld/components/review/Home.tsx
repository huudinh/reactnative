import { Button, View, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='View Detail' 
                onPress={() => { alert('Detail') }}
            />
        </View>
    )
}

export default HomeScreen;