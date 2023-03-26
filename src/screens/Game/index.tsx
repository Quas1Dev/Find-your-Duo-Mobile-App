import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons"
import { useEffect, useState } from 'react';

import { Background } from '../../components/background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { THEME } from '../../theme';
import { styles } from './styles';
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameParams } from '../../@types/navigation';
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
  // Initialize the state which stores the list of ads.
  const [ads, setAds] = useState<AdsInfo[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');
  // Return the route object that represents the current screen in the navigation stack.
  const route = useRoute();
  // Object with all parameters that were passed to the current route by the previous screen.
  const game = route.params as GameParams;
  // Navitation object to navigate through the screens in the app.
  const navigator = useNavigation();

  // Return the user to the screen where they were.
  function handleGoBack() {
    navigator.goBack();
  }

  async function getDiscordUser(adsId: string) {
    try {
      const result = await api.get(`ads/${adsId}/discord`);
      setDiscordDuoSelected(result.data.discord)
    } catch (err: any) {
      console.log(err.message)
      console.log("Something went wrong!")
    }
  }

  // Request the ads related to the game from our API.
  useEffect(() => {
    async function findAdsByGameId() {
      try {
        const result = await api.get<AdsInfo[]>(`games/${game.id}/ads`)
        setAds(result.data);
      } catch (err: any) {
        console.log(err.message)
        console.log("Something went wrong!")
      }
    }

    findAdsByGameId();
  }, [])

  return (
    // Wraps its children with a background image.
    <Background>
      {/* Renders a view that fits within the safe area of the device */}
      <SafeAreaView style={styles.container}>
        {/* Header contains the navigation controls and logo */}
        <View style={styles.header}>
          {/* Button-like component that responds to touch events */}
          <TouchableOpacity onPress={() => { handleGoBack() }}>
            {/* A vector arrow icon */}
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          {/* Displays the app's logo */}
          <Image
            source={logoImg}
            style={styles.logo}
            resizeMode='contain'
          />

          {/* Empty view that helps with alignment */}
          <View style={styles.right} />
        </View>

        {/* Image that represents the game */}
        <Image
          source={{ uri: game.thumb }}
          style={styles.cover}
          resizeMode='cover'
        />

        {/* Custom component that displays a title and subtitle */}
        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar.'
        />

        {/* Displays a horizontal list of items */}
        <FlatList
          data={ads}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <DuoCard
            data={item}
            onConnect={() => getDiscordUser(item.id)} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[ads.length > 0 ? styles.contentList : styles.emptyListContent]}
          style={styles.containerList}
          ListEmptyComponent={() => (
            // Displays a text string which appears when there is no items in the list
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
      <DuoMatch
        discord="fernando#1212"
        onClose={() => setDiscordDuoSelected("")}
        visible={discordDuoSelected ? true : false}
      />
    </Background>
  );
}