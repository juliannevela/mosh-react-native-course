import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class BackgroundImage extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.bgImage} source={this.props.source} />
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: '100%',
    },
});
