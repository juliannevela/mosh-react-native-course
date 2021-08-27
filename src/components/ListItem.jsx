import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.info}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    info: {
        flexDirection: 'column',
    },
    subTitle: {
        fontSize: 12,
        color: colors.medium,
    },
    title: {
        fontWeight: '500',
    },
});
