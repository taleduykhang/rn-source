import {StyleSheet} from 'react-native';
import {colors} from './color';

export const stylesGlobal = StyleSheet.create({
  btnPrimary: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
