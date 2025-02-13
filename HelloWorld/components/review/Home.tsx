import { Button, View, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='View Detail' 
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    )
}

export default HomeScreen;