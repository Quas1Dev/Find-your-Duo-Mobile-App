import React from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';

import { styles } from './styles';

export function CloseAppBtn() {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>An error occurred while loading fonts.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => {
                BackHandler.exitApp();
            }}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
}