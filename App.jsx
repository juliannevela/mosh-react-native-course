import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import GlobalStyles from './src/config/GlobalStyles';
import { Screen } from './src/components';
import ImageInputList from './src/components/ImageInputList';

export default function App() {
    const [imageUris, setImageUris] = useState([]);

    useEffect(() => {
        (async () => {
            const { granted } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!granted) {
                alert('Sorry, we need Media permissions to make this work!');
            }
        })();
    }),
        [];

    const pickImage = async () => {
        try {
            const { cancelled, uri } =
                await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
            if (!cancelled) setImageUris([...imageUris, uri]);
        } catch (e) {
            console.log('Oops: ', e.message);
        }
    };

    const showConfirmDialog = () => {
        return Alert.alert(
            'Are you sure?',
            'Are you sure you want to delete this image?',
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => handleRemoveImage(),
                },
            ],
            { cancelable: true }
        );
    };

    const handleRemoveImage = () => {
        const newImageUris = [...imageUris];
        newImageUris.splice(imageUris.length - 1, 1);
        setImageUris(newImageUris);
    };

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
