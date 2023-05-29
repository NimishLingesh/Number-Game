import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        < View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"></TextInput>
            < PrimaryButton>Reset</PrimaryButton>
            < PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginHorizontal: 25,
        marginTop: 100,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 40,
        shadowColor: 'black',
    },
    numberInput: {
          height: 50,
          width: 50,
          fontSize: 32,
          borderBottomColor: 'yellow',
          borderBottomWidth: 2,
          color: 'yellow',
          marginVertical: 8,
          fontWeight: 'bold',
          textAlign: 'center',
    }
})
