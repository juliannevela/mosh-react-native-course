import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import GlobalStyles from './src/config/GlobalStyles';

import MessagesScreen from './src/screens/MessagesScreen';
// import CardComp from './src/components/CardComp';
// import ListingDetailScreen from './src/screens/ListingDetailScreen';
// import ViewImageScreen from './src/screens/ViewImageScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <MessagesScreen />

            {/* <WelcomeScreen /> */}
            {/* <ViewImageScreen /> */}
            {/* <CardComp
                title="Red jacket for sale!"
                subTitle="$200"
                image={require('./src/assets/jacket.jpg')}
            />
            <CardComp
                title="Full-size couch for sale!"
                subTitle="$250"
                image={require('./src/assets/couch.jpg')}
            /> */}
            {/* <ListingDetailScreen /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#fff',
    },
});
