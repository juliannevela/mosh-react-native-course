import React, { useState } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const InitialMessages = [
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
    const [messages, setMessages] = useState(InitialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete message from messages
        // and update the list
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await setMessages([
            {
                id: 2,
                title: 'Message 2',
                description: 'This is message 2',
                image: require('../assets/mosh.jpg'),
            },
        ]);
        setRefreshing(false);
    };

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
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                        ItemSeparatorComponent={ListItemSeparator}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        enabled={true}
                        onRefresh={onRefresh}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});
