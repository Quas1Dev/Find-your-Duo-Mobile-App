import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {},
    errorText: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    closeButton: {
        padding: 20,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
    },
    closeButtonText: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.PRIMARY,
    }
});