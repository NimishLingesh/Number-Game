import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from '../components/ui/PrimaryButton';

import TitleTxt from "../components/ui/TitleTxt";


function generateRandomNumber(min, max, exclude){
    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if (rndNum===exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

function GameScreen(props) { 
    var minBoundary = 1;
    var maxBoundary = 100;
    var fixedMinBoundary = 1;
    var fixedMaxBoundary = 100;

    const initialGuess = generateRandomNumber(fixedMinBoundary, fixedMaxBoundary, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        // this consdition would be executed if any one of the list varable changes
        if(currentGuess === props.userNumber) {
            props.onGameOver();
        }
    }, [currentGuess, props.userNumber, props.onGameOver]);

    function nextGuessHandler(direction){
        if ((direction==="lower" && currentGuess < props.userNumber) || (direction==="greater" && currentGuess > props.userNumber)){
            Alert.alert("Dont lie!! You know that it's incorrect", [{text: "Sorry!", style: 'cancel'}]);
            return;
        }
        
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        // if (currentGuess === props.userNumber) {
        //     Alert.alert("FOUND THE NUMBER!!!");
        //     props.onGameOver();
        //     return;
        // }
        // else if (currentGuess===fixedMinBoundary || currentGuess===fixedMaxBoundary) {
        //     Alert.alert("Sorry, you lost the game");
        //     return;
        // }
    }
    return (
    <View style={styles.screen}>
        {/* Modularizing the next line in the components  */}
        {/* <Text style={styles.title}>Opponenet's Guess</Text> */}
        <TitleTxt>Opponenet's Guess</TitleTxt>
        <br></br>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or lower</Text>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            </View>
        </View>
        {/* <Text> Log Rounds</Text> */}
    </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 12, 
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6
    },
})
