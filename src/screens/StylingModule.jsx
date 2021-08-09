import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function StylingModule() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        backgroundColor: '#FFFF00',
        width: 100,
        height: 100,
        shadowColor: '#FF0000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
});
