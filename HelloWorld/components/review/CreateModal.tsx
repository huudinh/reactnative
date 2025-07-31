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