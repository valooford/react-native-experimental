import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({ onSubmit }) {
  const [value, setValue] = useState('');

  const handlePress = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Error! Nothing to add.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="What should be done..."
        autoCorrect={false}
        onChangeText={setValue}
      />
      <Button style={styles.button} title="Add" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    width: '75%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#0071FF',
  },
  button: {},
});
