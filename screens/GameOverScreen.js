import { Text, View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen(props) {
    return (
        <View style={styles.rootContainer}>
            <Text style={{fontWeight: 'bold'}}>Game Over</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={{fontWeight: 'bold', margin:10, color:'white'}}>Guess number is {props.guessNumber}</Text>
            <View>
                <PrimaryButton onPress={props.onStartNewGame}> Start Again </PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'grey',
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
});