import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Circle extends Shape {
  override render() {
   
 }
  }



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Write your message here</Text

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
