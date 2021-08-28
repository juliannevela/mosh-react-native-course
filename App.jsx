import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import AppTextInput from './src/components/AppTextInput';

import Screen from './src/components/Screen';
import GlobalStyles from './src/config/GlobalStyles';

export default function App() {
    const [fName, setFname] = useState('');
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Screen>
                <AppTextInput placeholder="Username" icon="email" />
            </Screen>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#fff',
    },
});
