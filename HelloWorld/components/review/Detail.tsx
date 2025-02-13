import { StyleSheet, View, Text, Button } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={ styles.review }>Detail Screen</Text>
            <Button title='Go About' 
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANTS_REGULAR,
    }
})