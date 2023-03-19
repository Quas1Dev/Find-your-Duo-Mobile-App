import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import { Background } from '../../components/background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { Image, TouchableOpacity, View } from 'react-native';
import logoImg from "../../assets/logo-nlw-esports.png";
import { Entypo } from "@expo/vector-icons"
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';

export default function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          
          <View style={styles.right} />

        </View>
        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar.' />
      </SafeAreaView>
    </Background>
  );
}