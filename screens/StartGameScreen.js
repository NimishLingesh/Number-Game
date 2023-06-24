import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }


    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <=0 ) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be between 1 and 99",
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        }

        onPickedNumber(chosenNumber);

    }

    return (
        < View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                < PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                < PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // justifyContent is top to bottom 
        justifyContent: 'center',
        // alignContent is left to right 
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 25,
        marginTop: 10,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        elevation: 40,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 1
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
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
   
})
