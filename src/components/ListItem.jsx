import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import GlobalStyles from '../config/GlobalStyles';

export default function ListItem({
    image,
    IconComponent,
    title,
    description,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={GlobalStyles.colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.info}>
                        <AppText style={styles.title}>{title}</AppText>
                        {description ? (
                            <AppText style={styles.description}>
                                {description}
                            </AppText>
                        ) : null}
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
        backgroundColor: GlobalStyles.colors.white,
    },
    description: {
        fontSize: 12,
        color: GlobalStyles.colors.medium,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    info: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
    },
});
