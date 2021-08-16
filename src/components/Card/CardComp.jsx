import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

export default function CardComp({ title, subTitle, image }) {
    // const imageSrc = require(`../../assets/${image}`);
    // console.log(imageSrc);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={image} style={styles.cardImage} />
                <View style={styles.details}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: '30%',
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
    },
    cardImage: {
        flex: 2,
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f8f4f4',
    },
    details: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#000',
    },
    subTitle: {
        fontSize: 12,
        color: colors.secondary,
    },
});
