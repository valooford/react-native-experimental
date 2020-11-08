import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Todo({ id, text, onRemove }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          console.log('Todo with id', id, 'was pressed');
        }}
        onLongPress={onRemove.bind(null, id)}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
  },
});
