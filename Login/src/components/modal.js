import { View, Text, Modal, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SysModal = (props) => {
    const { modalVisible, setModalVisible, message } = props;
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Thông báo</Text>
                        <AntDesign 
                            name="close" size={24} color="black" 
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                    <View style={styles.body} >
                        <Text>{message}</Text>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 10,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    body:{
        paddingVertical: 10,
    },
    bodyText: {
        fontSize: 18,
    },
   
});

export default SysModal;