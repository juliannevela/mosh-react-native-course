import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardComp from './src/components/Card/CardComp';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen /> */}
            <CardComp
                title="Red jacket for sale!"
                subTitle="$200"
                image={require('./src/assets/jacket.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
