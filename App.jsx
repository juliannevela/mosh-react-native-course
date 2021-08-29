import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import GlobalStyles from './src/config/GlobalStyles';
import { Screen } from './src/components';
import ImageInputList from './src/components/ImageInputList';

export default function App() {
    // const [imageUri, setImageUri] = useState(null);
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
                await ImagePicker.launchImageLibraryAsync();
            if (!cancelled) setImageUris([...imageUris, uri]);
        } catch (e) {
            console.log('Oops: ', e.message);
        }
    };

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Screen style={styles.container}>
                {/* <ImageInput imageUri={imageUri} onChangeImage={pickImage} /> */}
                <ImageInputList
                    imageUris={imageUris}
                    onAddImage={pickImage}
                    onRemoveImage={() => {}}
                />
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
