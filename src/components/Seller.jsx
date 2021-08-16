import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function Seller({ avatar, name, listings }) {
    return (
        <View style={styles.seller}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{listings} Listings</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    info: {
        flexDirection: 'column',
    },
    seller: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    subTitle: {
        fontSize: 12,
        color: colors.black,
        opacity: 0.5,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: colors.black,
    },
});
