import { StyleSheet, View, Text, Button } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANTS_REGULAR,
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANTS_REGULAR,
    }
})

const DetailScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();

    return (
        <View>
            <Text style={ styles.reviewText }>Id: {route.params?.id}</Text>
            <Text style={ styles.reviewText }>Tiêu đề: {route.params?.title}</Text>
            <Text style={ styles.reviewText }>Ratting: {route.params?.star}</Text>
            <Button title='Go Home' 
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default DetailScreen;