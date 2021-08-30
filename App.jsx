import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import GlobalStyles from './src/config/GlobalStyles';
import { Screen } from './src/components';
import ImageInputList from './src/components/ImageInputList';
import useImageUtils from './src/hooks/useImageUtils';

export default function App() {
    const { imageUris, pickImage, showConfirmDialog } = useImageUtils();
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Screen style={styles.container}>
                <ImageInputList
                    imageUris={imageUris}
                    onAddImage={pickImage}
                    onRemoveImage={showConfirmDialog}
                />
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
