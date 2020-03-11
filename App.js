import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>數位二甲林君翰</Text>
      <Text>110719008</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33F3FF',
    alignItems: 'center',
    justifyContent: 'center',
   //new created
  },
});
