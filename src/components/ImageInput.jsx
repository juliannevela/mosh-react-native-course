import React from 'react';
import {
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import { Icon } from './';
import GlobalStyles from '../config/GlobalStyles';

export default function ImageInput({ imageUri, onChangeImage }) {
    return (
        <TouchableWithoutFeedback onPress={onChangeImage}>
            <View style={styles.container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <Icon
                        name="camera"
                        size={80}
                        backgroundColor={null}
                        iconColor={GlobalStyles.colors.medium}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        overflow: 'hidden',
        width: 100,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
