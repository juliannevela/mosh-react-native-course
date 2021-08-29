import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

import { Icon } from './';
import GlobalStyles from '../config/GlobalStyles';

export default function ImageInput({ imageUri, onChangeImage, selected }) {
    return (
        <Pressable style={styles.container} onPress={onChangeImage}>
            {selected ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
                <Icon
                    name="camera"
                    size={50}
                    backgroundColor={null}
                    iconColor={GlobalStyles.colors.medium}
                />
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: GlobalStyles.colors.light,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
});
