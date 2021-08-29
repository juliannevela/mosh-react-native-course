import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputList({
    imageUris,
    onAddImage,
    onRemoveImage,
}) {
    let data = imageUris || [
        'https://temp.media/?height=400&category=food&text=TEST',
        'https://temp.media/?height=400&category=food&text=TEST',
        'https://temp.media/?height=400&category=food&text=TEST',
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
