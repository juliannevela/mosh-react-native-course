import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import GlobalStyles from './src/config/GlobalStyles';
import ListingEditScreen from './src/screens/ListingEditScreen';

export default function App() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <ListingEditScreen />
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
