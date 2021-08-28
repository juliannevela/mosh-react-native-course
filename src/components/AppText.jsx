import React from 'react';
import { Text } from 'react-native';

import GlobalStyles from '../config/GlobalStyles';

export default function AppText({ children, style }) {
    return <Text style={[GlobalStyles.text, style]}>{children}</Text>;
}
