import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <WelcomeScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
});
