import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import GlobalStyles from './src/config/GlobalStyles';
import ImageInput from './src/components/ImageInput';
import { Screen } from './src/components';

export default function App() {
    const [image, setImage] = useState(null);

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
            if (!cancelled) setImage(uri);
        } catch (e) {
            console.log('Oops: ', e.message);
        }
    };

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Screen style={styles.container}>
                <ImageInput imageURI={image} onChangeImage={pickImage} />
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
