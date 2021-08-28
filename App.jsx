import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import AppPicker from './src/components/AppPicker';
import AppTextInput from './src/components/AppTextInput';

import Screen from './src/components/Screen';
import GlobalStyles from './src/config/GlobalStyles';

const categories = [
    {
        label: 'Collectibles',
        value: 1,
    },
    {
        label: 'Clothing',
        value: 2,
    },
    {
        label: 'Games',
        value: 3,
    },
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Screen>
                <AppPicker
                    selectedItem={category}
                    onSelectItem={(item) => setCategory(item)}
                    icon="apps"
                    placeholder="Category"
                    items={categories}
                />
                <AppTextInput placeholder="Email" icon="email" />
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
