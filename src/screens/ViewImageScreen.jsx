import React from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';

import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.backBtn}></View>
            <View style={styles.deleteBtn}></View>
            <Image
                style={styles.image}
                resizeMode={'contain'}
                source={require('../assets/chair.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        marginTop: Platform.OS === 'android' ? 25 : 0,
    },
    backBtn: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteBtn: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
