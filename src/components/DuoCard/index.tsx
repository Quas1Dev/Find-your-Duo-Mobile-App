import { Text, TouchableOpacity, View } from 'react-native';
import { AdsInfo } from '../../screens/Game';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
interface Props {
  data: AdsInfo;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {

  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de Jogo"
        value={`${data.yearsplaying} ano(s) jogando`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekdays.length} dias \u2022 ${data.hourstart} - ${data.hourend}`}
      />

      <DuoInfo
        label='Chamada de áudio?'
        value={data.usevoicechannel ? "Sim" : "Não"}
        color={data.usevoicechannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Ionicons name="ios-game-controller-outline" size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}