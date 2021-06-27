import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
    flexDirection: 'column'
  },
  titleArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading
  },
  buttonArea: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getBottomSpace() ? getBottomSpace() + 24 : 24,
  }
});