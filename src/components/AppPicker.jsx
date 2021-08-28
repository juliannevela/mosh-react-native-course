import React, { useState } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GlobalStyles from '../config/GlobalStyles';
import AppText from './AppText';
import Screen from './Screen';

export default function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={GlobalStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={GlobalStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                    />
                </Screen>
            </Modal>
        </>
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
    text: {
        flex: 1,
    },
});
