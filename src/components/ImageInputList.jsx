import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputList({
    imageUris,
    onAddImage,
    onRemoveImage,
}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={imageUris}
                keyExtractor={(item, index) => item + index.toString()}
                numColumns={3}
                renderItem={({ item }) => (
                    <ImageInput
                        imageUri={item}
                        onChangeImage={onRemoveImage}
                        selected
                    />
                )}
            />
            <ImageInput onChangeImage={onAddImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
