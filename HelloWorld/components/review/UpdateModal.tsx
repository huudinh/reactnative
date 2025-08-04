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