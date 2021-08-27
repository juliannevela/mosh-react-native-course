import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function MyAccountScreen() {
    // Use MaterialCommunityIcons
    // Header:
    // 1. Profile: ListItem
    // Body:
    // 1. My Listings: format-list-bulleted
    // 2. My Messages: email
    // Footer:
    // 1. Log Out: logout
    // Colors:
    // 1. My Listings: primary
    // 2. My Messages: secondary
    // 3. Log Out: logout
}

const styles = StyleSheet.create({
    listings: {
        color: colors.primary,
    },
    messages: {
        color: colors.secondary,
    },
    logout: {
        color: colors.logout,
    },
});
