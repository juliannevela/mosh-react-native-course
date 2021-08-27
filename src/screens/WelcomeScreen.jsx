import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
} from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function WelcomeScreen() {
    const handlePress = () => console.log('Welcome Screen Pressed!');
    return (
        // <View style={styles.container}>
        <ImageBackground
            source={require('../assets/background.jpg')}
            blurRadius={1.5}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.tagline}>Sell What You Don't Want</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Login"
                    onPress={handlePress}
                    backgroundColor={colors.primary}
                />
                <AppButton
                    title="Register"
                    onPress={handlePress}
                    backgroundColor={colors.secondary}
                />
            </View>
        </ImageBackground>
        // </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        width: '100%',
        alignItems: 'center',
    },
    buttonsContainer: {
        alignItems: 'center',
        padding: 20,
        width: '100%',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    tagline: {
        paddingVertical: 20,
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        color: colors.black,
    },
});
