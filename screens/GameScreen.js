import { Text, View, StyleSheet } from "react-native";

import TitleTxt from "../components/TitleTxt";

function GameScreen() {
    return (
    <View style={styles.screen}>
        {/* Modularizing the next line in the components  */}
        {/* <Text style={styles.title}>Opponenet's Guess</Text> */}
        <TitleTxt>Opponenet's Guess</TitleTxt>
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
