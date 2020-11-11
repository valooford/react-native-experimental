import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Employee from './Employee';

const initialData = [
  { id: '0', text: 'One' },
  { id: '1', text: 'Two' },
  { id: '2', text: 'Three' },
];

export default function Main() {
  const [data, setData] = useState(initialData);

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={({ item: { text } }) => <Employee text={text} />}
        keyExtractor={({ id }) => id}
      />
      {/* <Button title="LANG" /> */}
      <View style={styles.bottomButtons}>
        <Button title="ADD" />
        <Button title="REMOVE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
});
