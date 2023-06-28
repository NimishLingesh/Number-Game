import {View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}){
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow500,
        padding: 24,

    },
    numberText: {

    }
})