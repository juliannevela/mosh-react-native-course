import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import GlobalStyles from './src/config/GlobalStyles';
import { Edit } from './src/screens/Listings';

export default function App() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Edit />
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
