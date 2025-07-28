import { StyleSheet, View, Text, Button } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const DetailScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();

    return (
        <View>
            <Text style={ styles.review }>Detail Screen</Text>
            <Text>{route.params?.id}</Text>
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