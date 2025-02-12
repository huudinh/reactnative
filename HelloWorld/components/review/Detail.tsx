import { StyleSheet, View, Text } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';

const DetailScreen = () => {
    return (
        <View>
            <Text style={ styles.review }>Detail Screen</Text>
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