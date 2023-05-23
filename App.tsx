import React, { useCallback, useState } from 'react';
import {Alert, Text, View,Image, TouchableOpacity, StyleSheet, Button, Pressable  } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <View style={style.container}>
      <MessageComponent message={'Wecome to React Native'} />
      
      <Image
      marginBottom={20}  
      fadeDuration={3000}
      source={{
        width: 200,
        height: 200,
        uri:"https://railsware.com/blog/wp-content/uploads/2017/12/React-180x180.png"}} />  
     
      <Button  title='Click Me' onPress={() => Alert.alert("Clickable", "Do you want to close?",
     [{text:"Yes"}, {text:"No"},])} />
      
      <Image
      blurRadius={1}  
      marginTop={20}
      resizeMode='contain'
      fadeDuration={1000}
      borderRadius={30}
      style={{width: 180, height: 180}}
      source={require('./assets/ReactNativeLogo.png')} />
      

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
    backgroundColor: 'pink',
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
   
  Button: {
    color: 'navy',
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  }
});