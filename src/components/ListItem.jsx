import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({
    image,
    title,
    description,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.info}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.description}>
                            {description}
                        </AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    description: {
        fontSize: 12,
        color: colors.medium,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    info: {
        flexDirection: 'column',
    },
    title: {
        fontWeight: '500',
    },
});
