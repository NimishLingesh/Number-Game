import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { LinearGradient  } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}></StartGameScreen>;

  if (userNumber) {
    screen = <GameScreen></GameScreen>
  }
 
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('./assets/images/back_img.jpg')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}>
        <Text style={styles.heading}>Guess a Number!!</Text>
        {/* <StartGameScreen></StartGameScreen> */}
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e3ded0',
    // backgroundColor: '#ff5c5c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40,
    // padding: 16,
    marginHorizontal: 30,
    // marginBottom: 10,
    // flex: 3,
  },
  backgroundImage: {
    opacity: 0.85
  }
});
