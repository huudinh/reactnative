# Update Modal

**Mục tiêu**

1. ID Review khác nhau

2. Đóng Modal clear data 

3. Khai báo type

4. Thêm, Xóa dữ liệu

5. Update dữ liệu 

    - Truyền dữ liệu cần update

    - Xây dựng hàm update

    - Chú ý : Khi bạn chọn review để sửa, prop currentReview thay đổi, nhưng các state title và star trong modal KHÔNG tự động cập nhật theo prop mới, vì chúng chỉ được khởi tạo một lần khi component mount.

    Để khắc phục, bạn cần dùng useEffect để cập nhật lại state mỗi khi currentReview thay đổi

6. Update lại sao theo đúng lựa chọn

```jsx
    Array.from({ length: Number(route.params?.star) || 0 }).map((_, idx) => (
        <Image 
            key={idx}
            source={starIcon}
            style={{ width: 30, height: 29 }}
        />
    ))
```

Đoạn code trên dùng để hiển thị số lượng hình ảnh ngôi sao tương ứng với số sao đánh giá (star). Cụ thể:

Number(route.params?.star) || 0: Lấy số sao từ params, ép kiểu về số, nếu không có thì là 0.

Array.from({ length: ... }): Tạo một mảng có độ dài bằng số sao (ví dụ 5 sao thì mảng có 5 phần tử).

.map((_, idx) => ( ... )): Lặp qua từng phần tử của mảng, với mỗi phần tử sẽ render một thẻ <Image /> (hình ngôi sao), và gán key là chỉ số idx.

Kết quả: Số lượng hình ảnh ngôi sao hiển thị đúng bằng số sao đánh giá.

### Sửa file components/review/CreateModal.tsx

```jsx
import { Text, View, Modal, StyleSheet, Button, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

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
    addNew: any;
}

const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNew } = props;
    const [title, setTitle] = useState("");
    const [star, setStar] = useState("");

    function randomId(min: number, max: number){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handlerSubmit = () => {
        if(!title){
            Alert.alert("Thông tin không hợp lệ", "Nội dung không được để trống");
            return;
        }
        if(!star){
            Alert.alert("Thông tin không hợp lệ", "Rating không được để trống");
            return;
        }
        addNew({
            id: randomId(1, 1000),
            title,
            star
        });

        setModalVisible(false);
        setTitle("");
        setStar("");
    }

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
                            onPress={() => {
                                setModalVisible(false);
                                setTitle("");
                                setStar("");
                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput 
                                style={styles.input} 
                                value={title}
                                onChangeText = {(v) =>  setTitle(v)} 
                            />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput 
                                keyboardType="numeric"
                                style={styles.input} 
                                value={star}
                                onChangeText = {(v) => setStar(v)}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15}}>
                        <Button 
                            title="Add" 
                            onPress={handlerSubmit}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CreateModal;

```

### Sửa file components/review/Home.tsx

```jsx
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
```

### Tạo file components/review/UpdateModal.tsx

```jsx
import { Text, View, Modal, StyleSheet, Button, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

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
    updateReview: any;
    currentReview: { id: number; title: string; star: number } | null;
}

const UpdateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, updateReview, currentReview } = props;
    const [title, setTitle] = useState(currentReview?.title || "");
    const [star, setStar] = useState(currentReview?.star?.toString() || "");

    // Cập nhật lại state khi currentReview thay đổi
    useEffect(() => {
        setTitle(currentReview?.title || "");
        setStar(currentReview?.star?.toString() || "");
    }, [currentReview]);

    const handlerSubmit = () => {
        updateReview({
            id: currentReview?.id || 0,
            title,
            star
        });

        setModalVisible(false);
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25}}>Update review</Text>
                        <AntDesign 
                            name="close" size={24} color="black" 
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput 
                                style={styles.input} 
                                value={title}
                                onChangeText = {(v) =>  setTitle(v)} 
                            />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput 
                                keyboardType="numeric"
                                style={styles.input} 
                                value={star}
                                onChangeText = {(v) => setStar(v)}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15}}>
                        <Button 
                            title="Add" 
                            onPress={handlerSubmit}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default UpdateModal;

```

### Tạo file components/review/Detail.tsx

```jsx
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

```

<!-- *Bài tiếp theo [Update Modal](session_20_update.md)* -->