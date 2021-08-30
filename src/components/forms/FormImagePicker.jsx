import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import useImageUtils from '../../hooks/useImageUtils';

export default function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const { pickImage, showConfirmDialog } = useImageUtils();

    const imageUris = values[name];

    const handleAdd = () => {
        const uri = pickImage();
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleRemove = () => {
        const uri = showConfirmDialog();
        setFieldValue(
            name,
            imageUris.filter((imageUri) => imageUri !== uri)
        );
    };

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
