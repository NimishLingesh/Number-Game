import { Text, StyleSheet } from "react-native";

function TitleTxt({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default TitleTxt;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 6
    },
});