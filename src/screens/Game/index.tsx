import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import { Background } from '../../components/background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';

export default function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
 
  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}