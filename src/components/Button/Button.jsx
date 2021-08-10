import React from 'react';
import { StyleSheet, Pressable, Text, Platform } from 'react-native';
import colors from '../../config/colors';

export default function Button({ title, onPress, backgroundColor }) {
    return (
        <Pressable
            style={[styles.button, backgroundColor && { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
        borderRadius: 30,
        margin: 10,
        backgroundColor: colors.primary,
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: colors.white,
    },
});
