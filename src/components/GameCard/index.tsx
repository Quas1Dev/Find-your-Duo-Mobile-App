import React from 'react';
import { Text, TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

// Game card props
export interface GameCardProps {
    id: string;
    title: string;
    num_ads: string;
    thumb: string;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
    return (
        // Creates a clickable area    
        <TouchableOpacity style={styles.container} {...rest}>
            {/* Background image */}
            <ImageBackground
                style={styles.cover}
                source={{ uri: data.thumb }}
            >
                {/* Bottom gradient */}
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    {/* Name of the game */}
                    <Text style={styles.name}>
                        {data.title}
                    </Text>
                    {/* Amount of ads */}
                    <Text style={styles.ads}>
                        {data.num_ads} anúncios
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}