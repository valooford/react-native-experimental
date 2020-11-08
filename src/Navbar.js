import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar({ title }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#0071FF',
  },
  text: {
    color: '#fff',
    fontSize: 22,
  },
});
