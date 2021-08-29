import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

import { Icon } from './';
import GlobalStyles from '../config/GlobalStyles';

export default function ImageInput({ imageURI, onChangeImage }) {
    return (
        <Pressable style={styles.container} onPress={onChangeImage}>
            {imageURI ? (
                <Image source={{ uri: imageURI }} style={styles.image} />
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
});
