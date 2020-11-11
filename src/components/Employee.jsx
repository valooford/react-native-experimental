import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Employee({ text, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.employee}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  employee: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
});
