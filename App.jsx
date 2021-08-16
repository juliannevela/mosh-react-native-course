import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import CardComp from './src/components/Card/CardComp';
import ListingDetailScreen from './src/screens/ListingDetailScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen /> */}
            {/* <CardComp
                title="Red jacket for sale!"
                subTitle="$200"
                image={require('./src/assets/jacket.jpg')}
            /> */}
            <ListingDetailScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#fff',
    },
});
