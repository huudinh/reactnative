import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { OPENSANTS_REGULAR } from '../../assets/utils/const';
import {  RouteProp, useRoute } from '@react-navigation/native';
import starIcon from '../../assets/images/star.png';
import background from '../../assets/images/bg.webp';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANTS_REGULAR,
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANTS_REGULAR,
        padding: 10,
    }
})

const DetailScreen = () => {
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();

    return (
        <ImageBackground
            source={background}
        >
            <Text style={ styles.reviewText }>Id: {route.params?.id}</Text>
            <Text style={ styles.reviewText }>Tiêu đề: {route.params?.title}</Text>
            <Text style={ styles.reviewText }>
                Ratting: {route.params?.star}
            </Text>
            <View style={{ flexDirection: 'row', gap: 5, marginHorizontal: 10}}>
                {Array.from({ length: Number(route.params?.star) || 0 }).map((_, idx) => (
                    <Image 
                        key={idx}
                        source={starIcon}
                        style={{ width: 30, height: 29 }}
                    />
                ))}
            </View>
        </ImageBackground>
    )
}

export default DetailScreen;