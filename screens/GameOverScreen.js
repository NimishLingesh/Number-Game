import { Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen(props) {
    return (
        <><Text>Game is Over</Text><View>
            <PrimaryButton onPress={onStartNewGame}> Start Again </PrimaryButton>
        </View></>
    )
}