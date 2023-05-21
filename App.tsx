import { useCallback, useState } from 'react';
import { Text, View,Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreseCount = () => setCount(count - 1);
  return (
    <View style={style.container}>
      <MessageComponent message={'Wecome to React Native'} />
      <MessageComponent message={count} />
      <CounterButton callback={increaseCount} />
      <CounterButton callback={decreseCount} />
    </View>
  );
}

const CounterButton = ({ callback }) => {
  return <Button title={`Increase Count by 1`} onPress={callback} />;
  return <Button title={`Decrese Count by 1`} onPress={callback} />;
};

const MessageComponent = ({ message }) => {
  return (
    <View>
      <Button color='orange' title={`Decrese Count by 1`} onPress={callback} />
      <Text numberOfLines={1} style={style.headerText}>{message}</Text>
      <TouchableOpacity onPress={() => alert('You tapped the image <3 !')}>
      <Image 
      resizeMode='contain'
      fadeDuration={1000}
      borderRadius={30}
      source={require('./assets/ReactNativeLogo.png')}/>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
});