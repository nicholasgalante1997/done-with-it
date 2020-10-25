import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableOpacity onPress={() => console.log('Ashley has the buds.a')}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}} />
       </TouchableOpacity>
    </SafeAreaView>
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
