import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function StylingModule() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.innerInner} />
            </View>
            <View style={styles.inner2} />
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
        elevation: 50,
        padding: 20,
        paddingHorizontal: 10,
    },
    innerInner: {
        backgroundColor: 'orange',
        width: 50,
        height: 50,
        elevation: 50,
    },
    inner2: {
        backgroundColor: '#00FFFF',
        width: 100,
        height: 100,
        elevation: 50,
    },
});
