import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function useImageUtils() {
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

    const handleRemoveImage = () => {
        const newImageUris = [...imageUris];
        newImageUris.splice(imageUris.length - 1, 1);
        setImageUris(newImageUris);
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

    return {
        handleRemoveImage,
        imageUris,
        pickImage,
        showConfirmDialog,
    };
}
