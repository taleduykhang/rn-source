import * as React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
// import {styles} from './styles';

export interface ButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
}

/**
 * Describe your component here
 */
export const Button = observer(function Button({}: ButtonProps) {
  return <View></View>;
});
