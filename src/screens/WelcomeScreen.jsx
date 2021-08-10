import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import BackgroundImage from './BackgroundImage';

export default function WelcomeScreen() {
    return (
        <View>
            <BackgroundImage source={'../assets/background.jpg'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {},
});
