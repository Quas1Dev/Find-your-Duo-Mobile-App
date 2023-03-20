import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import logoImg from "../../assets/logo-nlw-esports.png";
import { Entypo } from "@expo/vector-icons"
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import api from '../../AxiosConfig/AxiosConfig';

export interface AdsInfo {
  id: string;
  gameid: string;
  name: string;
  yearsplaying: Number;
  discord: string;
  weekdays: Array<number>;
  hourstart: number;
  hourend: string;
  usevoicechannel: boolean;
  createdate: string;
}

export default function Game() {
  const route = useRoute();
  const [ads, setAds] = useState<AdsInfo[]>();
  const game = route.params as GameParams;
  const navigator = useNavigation();

  function handleGoBack() {
    navigator.goBack();
  }

  useEffect(() => {
    async function findAdsByGameId() {
      try {
        const result = await api.get<AdsInfo[]>(`games/${game.id}/ads`)
        setAds(result.data);
        console.log("result:", result.data[0].hourend);
      } catch (err: any) {
        console.log(err.message)
        console.log("Something went wrong!")
      }
    }

    findAdsByGameId();
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { handleGoBack() }}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
            resizeMode='contain'
          />

          <View style={styles.right} />

        </View>

        <Image
          source={{ uri: game.thumb }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar.' />
        {ads && <FlatList
          data={ads}
          keyExtractor={item => item.id}
          renderItem = {({item})=><DuoCard data={item}/>}
        />}
      </SafeAreaView>
    </Background>
  );
}