import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value=""
      />

      <DuoInfo
        label="Tempo de Jogo"
        value=""
      />

      <DuoInfo
        label="Disponibilidade"
        value=""
      />

      <DuoInfo
        label="Chamada de áudio"
        value=""
      />
    </View>
  );
}