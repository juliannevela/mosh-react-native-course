import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import CardComp from '../components/CardComp';
import GlobalStyles from '../config/GlobalStyles';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Full-size couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg'),
    },
];

export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <CardComp
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: GlobalStyles.colors.light,
    },
});
