import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentColored: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.primary
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center'
  },
});