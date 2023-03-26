import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcons}
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <AntDesign name="checkcircleo" size={64} color={THEME.COLORS.SUCCESS} style={{ fontWeight: 'bold' }} />

          <Heading
            title="Let's play"
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione seu discord.
          </Text>
          <TouchableOpacity style={styles.discordBtn}>
            <Text style={styles.discord}>
              {discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}