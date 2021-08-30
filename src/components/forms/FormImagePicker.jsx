import React from 'react';
import { StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

export default function FormImagePicker({
    imageData,
    onChange,
    error,
    ...otherProps
}) {
    return (
        <>
            <ImageInputList
                imageUris={imageData}
                onAddImage={ }
                onRemoveImage={ }
            />
            <ErrorMessage />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
