import React from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.actions}>
                <View style={styles.backBtn}></View>
                <View style={styles.deleteBtn}></View>
            </View>
            <Image
                style={styles.image}
                resizeMode={'contain'}
                source={require('../assets/chair.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 25 : 0,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backBtn: {
        height: 50,
        width: 50,
        marginLeft: 20,
        backgroundColor: '#FC5C65',
    },
    deleteBtn: {
        height: 50,
        width: 50,
        marginRight: 20,
        backgroundColor: '#4ECDC4',
    },
    image: {
        width: '100%',
        height: '80%',
    },
});
