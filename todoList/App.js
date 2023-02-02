import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react'
import Task from './components/Task';
import { TouchableOpacity } from 'react-native-web';

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

      {/* legg til ny sak */}
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder="write a task"/>

          <TouchableOpacity >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

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

  items: {marginTop:20},

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  },

  input: {},

  addWrapper: {},

  addText: {},
});
