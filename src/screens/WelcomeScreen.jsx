import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
} from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo-red.png')}
                    />
                    <Text style={styles.text}>Sell What You Don't Want</Text>
                </View>
                <View style={styles.loginBtn} />
                <View style={styles.regBtn} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    loginBtn: {
        width: '100%',
        height: 60,
        backgroundColor: '#FC5C65',
    },
    regBtn: {
        width: '100%',
        height: 60,
        backgroundColor: '#4ECDC4',
    },
});
