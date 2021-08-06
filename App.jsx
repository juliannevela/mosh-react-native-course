import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.one} />
            <View style={styles.two} />
            <View style={styles.three} />
            <View style={styles.four} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    one: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-start',
    },
    two: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
    },
    three: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
    four: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
});
