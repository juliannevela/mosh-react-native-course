import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button/Button';
import colors from './src/config/colors';
import StylingModule from './src/screens/StylingModule';
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen /> */}
            {/* <ViewImageScreen /> */}
            <Button
                title="Login"
                onPress={console.log('Login Pressed!')}
                backgroundColor={colors.primary}
            />
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
