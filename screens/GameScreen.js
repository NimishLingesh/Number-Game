import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/game/NumberContainer";

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

function GameScreen({userNumber}) { 
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
    <View style={styles.screen}>
        {/* Modularizing the next line in the components  */}
        {/* <Text style={styles.title}>Opponenet's Guess</Text> */}
        <TitleTxt>Opponenet's Guess</TitleTxt>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or lower</Text>
        </View>
        <Text> Log Rounds</Text>
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
