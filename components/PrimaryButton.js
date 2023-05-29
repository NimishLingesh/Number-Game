import { View, Text, Pressable, StyleSheet} from 'react-native';

// you can use props.children or {childern} directly  
function PrimaryButton(props) {
    function pressHandler() {
        console.log("Pressed!!")
    }

    return (
    <Pressable style={ ({pressed}) => pressed ? [styles.pressed] : [styles.container]} onPress={pressHandler}>
    <View style={styles.container} android_ripple={{ color:'#6400233'}}>
        <Text style={styles.inputText}>{props.children}</Text>
    </View>
    </Pressable>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignContent: 'center',
        margin: 4,
        elevation: 2,
    },
    inputText: {
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: 'maroon',
    }
})
