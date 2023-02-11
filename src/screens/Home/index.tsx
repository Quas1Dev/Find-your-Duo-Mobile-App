import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import logo from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games';

export default function Home() {
    return (
        // Our screen main container
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />
            {/* Title and subtitle */}
            <Heading
                title="Encontre seu duo"
                subtitle="Selecione o game que deseja jogar..."
            />
            {/* Ads list */}
            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({item}) => <GameCard data={item}/>}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
            />
        </View>
    )
}
