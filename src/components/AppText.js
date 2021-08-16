import React from 'react';
import { Text } from 'react-native';

import styles from './AppText/styles';

export default function AppText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        fontSize: 18,
        fontFamily: 'Roboto',
    },
});
