import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

    {/* Todays tasks */}
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>  

        <View style={styles.items}>
          {/* Tasks container */}
          <Task text="Task 1"/>
          <Task text="Task 2"/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  sectionWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {},
});
