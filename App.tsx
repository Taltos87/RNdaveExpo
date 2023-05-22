import { useCallback, useState } from 'react';
import { Text, View,Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <View style={style.container}>
      <MessageComponent message={'Wecome to React Native'} />
      <Image 
      flexWrap='wrap'
      resizeMode='contain'
      fadeDuration={1000}
      borderRadius={30}
      style={{width: 200, height: 200}}
      source={require('./assets/ReactNativeLogo.png')}/>
      <MessageComponent message={count} />
      <CounterButton callback={increaseCount} />
      <CounterButton2 callback={decreaseCount} />
    </View>
  );
}

const CounterButton = ({ callback }) => {
  return <Button title={`Increase Count by 1`} onPress={callback} />;
};
const CounterButton2 = ({ callback }) => {
return <Button title={`✨Decrese Count by 1`} onPress={callback} />;
}
const MessageComponent = ({ message }) => {
  return (
    <View>
      <Text numberOfLines={1} style={style.headerText}>{message}</Text>
      <TouchableOpacity onPress={() => alert('You tapped the image <3 !')}>
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
    color: 'navy',
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  },
  Image: { 
    borderTopWidth: 10, borderColor: 'red',
    alignContent:'center', },
});