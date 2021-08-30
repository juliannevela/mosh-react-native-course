import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import GlobalStyles from './src/config/GlobalStyles';
import { Screen } from './src/components';
import { EditListing } from './src/screens/Listings';

export default function App() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Screen style={styles.container}>
                <EditListing />
            </Screen>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
});
