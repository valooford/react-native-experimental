import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AddTodo from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';

const initialTodos = [
  { id: '000', text: 'Hello' },
  { id: '111', text: 'React' },
  { id: '222', text: 'Native' },
  { id: '333', text: ':)' },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos); // list of todos

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), text }]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title="Todo" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item: { id, text } }) => (
            <Todo id={id} text={text} onRemove={removeTodo} />
          )}
          keyExtractor={(todo) => todo.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

/* styling tips
 *
 * container: {
 *   flex: 1, // container height equals display height in that case
 *
 *   flexDirection: 'column',
 *   alignItems: 'flex-end', // horizontal align
 *   justifyContent: 'flex-start', // vertical align
 * or
 *   flexDirection: 'row',
 *   alignItems: 'flex-end', // vertical align
 *   justifyContent: 'flex-start', // horizontal align
 *   backgroundColor: 'darkred',
 * },
 *
 * text: {
 *   color: '#fff',
 *   fontSize: 26,
 * },
 */
