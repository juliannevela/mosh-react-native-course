import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import colors from '../config/colors';
import AppText from '../components/AppText';

export default function ListingDetailScreen() {
    return (
        <View>
            <Image
                source={require('../assets/jacket.jpg')}
                style={styles.image}
            />
            <View style={styles.details}>
                <AppText style={styles.title}>Red jacket for sale!</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/nessima.png')}
                    title="Nessi Skye"
                    subTitle="5 Listings"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: colors.secondary,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.black,
    },
    userContainer: {
        marginVertical: 10,
    },
});
