import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GlobalStyles from '../config/GlobalStyles';

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={GlobalStyles.colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput style={GlobalStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
});
