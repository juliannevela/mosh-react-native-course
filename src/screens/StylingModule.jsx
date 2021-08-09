import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppText from '../components/AppText';

export default function StylingModule() {
    return (
        <View style={styles.container}>
            <AppText style={styles.inner}>I love React Native!</AppText>
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
    },
});
