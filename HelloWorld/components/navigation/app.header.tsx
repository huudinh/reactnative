import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from "../../assets/utils/const";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
    },
    headerText: {
        flex:1,
        textAlign: 'center',
        fontSize: 25,
    }
})

const AppHeader = () => {
    const navigation:any = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialIcons 
                name="menu" size={30} color="black" 
                onPress={() => navigation.openDrawer()}
            />
            <Text style={[styles.headerText, globalStyles.globalFont]}>App Header</Text>
        </View>
    )
}

export default AppHeader;