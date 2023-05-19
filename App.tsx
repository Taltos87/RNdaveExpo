import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  return (
    <View style={style.container}>a
      <MessageComponent message={'Hello'} />
      <MessageComponent message={count} />
      <CounterButton callback={increaseCount} />
    </View>
  );
}

const CounterButton = ({ callback }) => {
  return <Button title={`Increase Count by 1`} onPress={callback} />;
};

const MessageComponent = ({ message }) => {
  return (
    <View>
      <Text style={style.headerText}>{message}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
  },
});