import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>App</Text>
    </View>
  );
}

// upd

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#0071ff',
  },
  name: {
    paddingTop: 12,
    color: '#fff',
    fontSize: 22,
  },
});
