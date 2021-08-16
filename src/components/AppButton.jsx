import React from 'react';
import { StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

export default function AppButton({ title, onPress, backgroundColor }) {
    return (
        <TouchableOpacity
            style={[styles.button, backgroundColor && { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: colors.white,
    },
});
