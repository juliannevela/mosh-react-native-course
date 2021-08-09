import React from 'react';
import { StyleSheet, View } from 'react-native';
import StylingModule from './src/screens/StylingModule';
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen /> */}
            {/* <ViewImageScreen /> */}
            <StylingModule />
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
});
