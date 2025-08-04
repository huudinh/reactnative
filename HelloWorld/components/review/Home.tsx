import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CreateModal from './CreateModal';
import AntDesign from '@expo/vector-icons/AntDesign';
import UpdateModal from './UpdateModal';

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
        position: "relative"
    },
    reviewDelete:{
        position: "absolute",
        right: 10,
        top:15,
        cursor: "pointer"
    },
    reviewEdit:{
        position: "absolute",
        right: 50,
        top:15
    }
})

const HomeScreen = () => {
    const navigation:NavigationProp<RootStackParamList> = useNavigation();

    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: 'React Native', star: 5},
        {id: 2, title: 'Javascript', star: 5},
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    const [modalUpdateVisible, setModalUpdateVisible] = useState(false);
    const [currentReview, setCurrentReview] = useState<IReview | null>(null);

    const addNew = (item: IReview) => {
        setReviews([...reviews, item]);
    }

    const updateReview = (item: IReview) => {        
        setReviews(reviews.map((r) => r.id === item.id ? item : r));
        setModalUpdateVisible(false);
    }

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
                                    <Text style={styles.reviewDelete}>
                                        <AntDesign 
                                            name="delete" size={20} color="black" 
                                            onPress={() => {
                                                setReviews(reviews.filter((r) => r.id !== item.id));
                                            }}
                                        />
                                    </Text>
                                    <Text style={styles.reviewEdit}>
                                        <AntDesign name="edit" size={20} color="black" 
                                            onPress={() => {
                                                setCurrentReview(item);
                                                setModalUpdateVisible(true);
                                            }}
                                        />
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <CreateModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addNew={addNew}
            />

            <UpdateModal
                modalVisible={modalUpdateVisible}
                setModalVisible={setModalUpdateVisible}
                updateReview={updateReview}
                currentReview={currentReview}
            />

        </View>
    )
}

export default HomeScreen;