import { StyleSheet, Text } from 'react-native';

function GameScreen() {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      GUESS
      <View>
        <Text>Higher or lover?</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
