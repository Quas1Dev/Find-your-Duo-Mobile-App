import { View } from 'react-native';
import { AdsInfo } from '../../screens/Game';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
interface Props {
  data: AdsInfo;
}

export function DuoCard({ data }: Props) {

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
        value={`${data.weekdays.length} dias`}
      />

      <DuoInfo
        label='Chamada de áudio?'
        value={data.usevoicechannel? "Sim" : "Não"}
      />

    </View>
  );
}