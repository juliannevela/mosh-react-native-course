import React from 'react';
import {
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
} from 'react-native';
import styles from './styles/app-style';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello React Native</Text>
            <TouchableNativeFeedback
                onPress={() => console.log('image pressed')}
            >
                <View
                    style={{
                        backgroundColor: 'yellow',
                        height: 200,
                        width: 200,
                    }}
                />
            </TouchableNativeFeedback>
        </SafeAreaView>
    );
}
