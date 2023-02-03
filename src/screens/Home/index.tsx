import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import logo from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Heading
                title="Encontre seu duo"
                subtitle="Selecione o game que deseja jogar..."
            />
            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({item}) => <GameCard data={item}/>}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    )
}
