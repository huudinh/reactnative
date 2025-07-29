import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

interface IReview{
    id: number;
    title: string;
    star: number;
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        margin: 15,

    }
})

const HomeScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();
    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: 'React Native', star: 5},
        {id: 2, title: 'Javascript', star: 5},
    ]);

    return (
        <View>
            <Text style={{ fontSize:30 }} >Review list</Text>

            <View>
                <FlatList 
                    data={reviews}
                    keyExtractor={(item) => item.id + ""}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail', item)}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomeScreen;