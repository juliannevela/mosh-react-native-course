import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import GlobalStyles from '../../config/GlobalStyles';
import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

export default function AppFormPicker({
    items,
    name,
    numberOfColumns,
    PickerItemComponent,
    placeholder,
    width,
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: GlobalStyles.colors.medium,
        flex: 1,
    },
});
