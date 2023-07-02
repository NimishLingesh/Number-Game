import { cloneElement } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

// you can use props.children or {childern} directly  
function PrimaryButton({children, onPress}) {
    // function pressHandler() {
    //     console.log("Pressed!!")
    // }

    return (
    <View style={styles.buttonOuterContainer} android_ripple={{ color:'#6400233'}}>
        {/* [styles.buttonInnerContainer, styles.pressed] is an array to be used together to reflect the styles of both  */}
        <Pressable 
        style={ ({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : [styles.buttonInnerContainer]} 
        onPress={onPress}>
        <Text style={styles.inputText}>{children}</Text>
        </Pressable>
    </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.btns,
        paddingVertical: 8,
        paddingHorizontal: 35,
        alignContent: 'center',
        elevation: 2,
    },
    inputText: {
        color: 'black',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        // backgroundColor: 'maroon',
    }
})
