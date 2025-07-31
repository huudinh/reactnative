# Images - Modal

**Mục tiêu**

1. Thêm hình ảnh vào ứng dụng

2. Tạo Modal https://reactnative.dev/docs/0.76/modal

3. Tạo Icon để mở Modal https://icons.expo.fyi/Index/AntDesign/plussquareo

### Tạo file mới components/review/CreateModal.tsx

```jsx
import { Text, View, Modal, Pressable, StyleSheet, Button } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 15,
    },
    groupInput: {
        marginBottom: 10,
    },
    text: {
        fontSize:20,
    },
    input:{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        fontSize: 16,
    }
   
});

interface IProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible } = props;

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25}}>Create a review</Text>
                        <AntDesign 
                            name="close" size={24} color="black" 
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput 
                                keyboardType="numeric"
                                style={styles.input} 
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15}}>
                        <Button title="Add" />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CreateModal;

```

### Sửa file components/review/Detail.tsx

```jsx
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';
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
            <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 10}}>
                <Image 
                    source={starIcon}
                    style={{ width: 30, height: 29 }}
                />
                <Image 
                    source={starIcon}
                    style={{ width: 30, height: 29 }}
                />
                <Image 
                    source={starIcon}
                    style={{ width: 30, height: 29 }}
                />
                <Image 
                    source={starIcon}
                    style={{ width: 30, height: 29 }}
                />
                <Image 
                    source={starIcon}
                    style={{ width: 30, height: 29 }}
                />
                
            </View>
        </ImageBackground>
    )
}

export default DetailScreen;
```


### Thêm file type/route.d.ts

``` ts
type RootStackParamList = {
    Home: undefined;
    Detail: {id: number; title: string; star: number} | undefined;
    About: undefined;
}

declare module "*.png"
declare module "*.webp"
```

### Sửa file components/review/Home.tsx

```jsx
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
```

*Bài tiếp theo [Modal](session_20_update.md)*