import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText.android';

export default function StylingModule() {
    return (
        <View style={styles.container}>
            <AppText>I love React Native!</AppText>
            <MaterialCommunityIcons name="email" size={60} color="orange" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
