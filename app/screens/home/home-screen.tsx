import {NavigatorParamList} from 'stacks';
import React, {FC, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, 'home'>> =
  observer(() => {
    const [value, setValue] = useState<string>('');
    const onPress = () => {
      if (value === 'duykhang') {
        Alert.alert('Thông báo', 'Bạn đã đăng nhập thành công');
      } else {
        Alert.alert('Thông báo', 'Thất bại');
      }
    };
    return (
      <View style={styles.container} testID="home">
        <TextInput
          onChangeText={(txt: string) => setValue(txt)}
          value={value}
          testID="inputTest"
          style={{
            borderWidth: 1,
            borderColor: 'red',
            width: 200,
            height: 50,
            marginBottom: 20,
          }}
        />
        <TouchableOpacity testID="buttonTest" onPress={onPress}>
          <Text testID="txtTest">Submit</Text>
        </TouchableOpacity>
      </View>
    );
  });
