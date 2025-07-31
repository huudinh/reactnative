import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../assets/utils/const';

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 15
    }
})

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>About Screen</Text>
        </View>
    )
}

export default AboutScreen;

