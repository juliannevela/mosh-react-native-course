import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
} from 'react-native';

import Button from '../components/Button/Button';
import colors from '../config/colors';

export default function WelcomeScreen() {
    const handlePress = () => console.log('Welcome Screen Pressed!');
    return (
        <View style={styles.container}>
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
                    <Text style={styles.text}>Sell What You Don't Want</Text>
                </View>
                <Button
                    title="Login"
                    onPress={handlePress}
                    backgroundColor={colors.primary}
                />
                <Button
                    title="Register"
                    onPress={handlePress}
                    backgroundColor={colors.secondary}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 45,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
});
