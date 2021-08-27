import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'Message 1',
        description: 'This is message 1',
        image: require('../assets/nessima.png'),
    },
    {
        id: 2,
        title: 'Message 2',
        description: 'This is message 2',
        image: require('../assets/mosh.jpg'),
    },
];

export default function MessagesScreen() {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log('Pressed: ', item)}
                        renderRightActions={ListItemDeleteAction}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});
