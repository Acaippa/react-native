import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native-web';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View>
                <View style={styles.circular}></View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    circular: {
        width: 14, 
        height: 14,
        borderStyle: "solid",
        borderColor: "#55BCF6",
        borderRadius: 50,
        borderWidth: 2,
    },
});

export default Task;