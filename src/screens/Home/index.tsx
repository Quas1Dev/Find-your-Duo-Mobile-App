import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games';
import api from '../../AxiosConfig/AxiosConfig';
import { Background } from '../../components/background';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [games, setGames] = useState<GameCardProps[]>([])
    const navigation = useNavigation();

    function handleGameClicked({ id, title, thumb }: GameCardProps) {
        navigation.navigate('game', {id, title, thumb}) 
    }
    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await api.get<GameCardProps[]>('/games')
                setGames(response.data);
            } catch (err: any) {
                console.error("Error:", err.message);
                throw new Error("Something went wrong!");
            }
        }
        fetchGames()
    }, [])

    return (
        <Background>
            {/* Our screen main container */}
            <SafeAreaView style={styles.container}>
                {/* Logo */}
                <Image source={logo} style={styles.logo} />
                {/* Title and subtitle */}
                <Heading
                    title="Encontre seu duo"
                    subtitle="Selecione o game que deseja jogar..."
                />
                {/* Ads list */}
                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <GameCard data={item} onPress={() => {
                        const {id, title, thumb, num_ads} = item;
                        handleGameClicked({ id, title, thumb, num_ads })
                    }} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={styles.contentList}
                />
            </SafeAreaView>
        </Background>
    )
}
