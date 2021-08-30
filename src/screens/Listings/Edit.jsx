import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
// import * as Location from 'expo-location';

import {
    AppForm,
    FormField,
    FormImagePicker,
    Picker,
    Submit,
} from '../../components/forms';
import CategoryPickerItem from '../../components/CategoryPickerItem';
import Screen from '../../components/Screen';
import GlobalStyles from '../../config/GlobalStyles';
import useImageUtils from '../../hooks/useImageUtils';
import ImageInputList from '../../components/ImageInputList';

const validationSchema = Yup.object().shape({
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().optional().label('Description'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    title: Yup.string().required().min(1).label('Title'),
    images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
    {
        backgroundColor: '#fc5c65',
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1,
    },
    {
        backgroundColor: '#fd9644',
        icon: 'car-side',
        label: 'Auto',
        value: 2,
    },
    {
        backgroundColor: '#fed330',
        icon: 'camera',
        label: 'Cameras',
        value: 3,
    },
    {
        backgroundColor: '#26de81',
        icon: 'google-controller',
        label: 'Games',
        value: 4,
    },
    {
        backgroundColor: '#2bcbba',
        icon: 'hanger',
        label: 'Clothing',
        value: 5,
    },
    {
        backgroundColor: '#45aaf2',
        icon: 'basketball',
        label: 'Sports',
        value: 6,
    },
    {
        backgroundColor: '#4b7bec',
        icon: 'headphones',
        label: 'Movies & Music',
        value: 7,
    },
    {
        backgroundColor: '#9c67e3',
        icon: 'book-open-variant',
        label: 'Books',
        value: 8,
    },
    {
        backgroundColor: GlobalStyles.colors.medium,
        icon: 'window-maximize',
        label: 'Other',
        value: 9,
    },
];

export default function ListingEditScreen() {
    const { imageUris, pickImage, showConfirmDialog } = useImageUtils();

    // const [location, setLocation] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         const { granted } =
    //             await Location.requestForegroundPermissionsAsync();
    //         if (granted) {
    //             const location = await Location.getCurrentPositionAsync({});
    //             setLocation(location);
    //         }
    //     })();
    // }, []);

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    category: null,
                    description: '',
                    price: '',
                    title: '',
                    images: [],
                    // location,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <ImageInputList
                    imageUris={imageUris}
                    onAddImage={pickImage}
                    onRemoveImage={showConfirmDialog}
                />
                {/* <FormImagePicker name="images" /> */}
                <FormField
                    autoCapitalize="words"
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <FormField
                    // icon="cash-usd"
                    keyboardType="decimal-pad"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={GlobalStyles.inputWidth.small}
                />
                <Picker
                    items={categories}
                    name="category"
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    numberOfColumns={3}
                    width={GlobalStyles.inputWidth.medium}
                />
                <FormField
                    maxLength={255}
                    multiLine
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <Submit title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
    },
});
