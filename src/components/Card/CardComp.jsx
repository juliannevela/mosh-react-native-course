import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardComp({ title, subTitle, image }) {
    // const imageSrc = require(`../../assets/${image}`);
    // console.log(imageSrc);
    return (
        <View style={{ backgroundColor: '#f8f4f4' }}>
            <View style={styles.card}>
                <Image source={image} style={styles.cardImage} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    cardImage: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    subTitle: {
        fontSize: 12,
        color: '#999',
    },
});
