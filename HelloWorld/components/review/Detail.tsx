import { StyleSheet, View, Text } from 'react-native';

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
        fontFamily: 'OpenSans',
    }
})