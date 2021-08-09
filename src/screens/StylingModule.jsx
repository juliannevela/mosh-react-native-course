import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StylingModule() {
    return (
        <View style={styles.container}>
            <Text style={styles.inner}>
                I love React Native! This is my first React Native app. This is
                going to be really awesome when it's finished being built!'
            </Text>
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
        fontSize: 20,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#FF00FF',
        textTransform: 'capitalize',
        textAlign: 'center',
    },
});
