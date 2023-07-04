import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// import { LinearGradient  } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }
  
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  // function startGame(){
  //   setGameIsOver(true);
  // }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}></StartGameScreen>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}></GameScreen>;
  }

  if (gameIsOver &&  userNumber){
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} guessNumber={userNumber}/>;
  }
 
  return (
    // <StatusBar style='light'>
    <View style={styles.container}>
      <ImageBackground 
      source={require('./assets/images/back_img.jpg')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}>
        {/* <Text style={styles.heading}>Guess a Number!!</Text> */}
        {/* <StartGameScreen></StartGameScreen> */}
        <SafeAreaView style={styles.innerContainer}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
    // </StatusBar>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    // maxWidth: '80%',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: '#e3ded0',
    // backgroundColor: '#ff5c5c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.85
  }
});
