import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CreateModal from './CreateModal';
import AntDesign from '@expo/vector-icons/AntDesign';

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

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Text style={{ fontSize:30, paddingLeft:10 }} >Review list</Text>
            <View style={{ alignItems: 'center'}}>
                <AntDesign 
                    name="plussquareo" size={30} color="orange" 
                    onPress={() => setModalVisible(true)}
                />
            </View>
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

            <CreateModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </View>
    )
}

export default HomeScreen;