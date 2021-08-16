import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Seller from '../components/Seller/Seller';
import colors from '../config/colors';

export default function ListingDetailScreen() {
    // Listing Detail:
    // Item Image
    // Item Title
    // Item Description + Price
    // Seller Name
    // Seller Avatar
    // Seller Listings

    return (
        <View style={styles.listing}>
            <Image
                source={require('../assets/jacket.jpg')}
                style={styles.image}
            />
            <View style={styles.details}>
                <Text style={styles.title}>Red jacket for sale!</Text>
                <Text style={styles.subTitle}>$100</Text>
            </View>
            <Seller
                avatar={require('../assets/mosh.jpg')}
                name="Mosh Hamedani"
                listings="5"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listing: {
        flex: 1,
    },
    details: {
        flexDirection: 'column',
        margin: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    subTitle: {
        fontSize: 14,
        color: colors.secondary,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#000',
    },
});
