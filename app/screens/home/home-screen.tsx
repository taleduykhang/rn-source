import {NavigatorParamList} from 'stacks';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, 'home'>> =
  observer(() => {
    return (
      <View style={styles.container} key="home">
        <Text>haha</Text>
      </View>
    );
  });
