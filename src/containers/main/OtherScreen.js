import React from 'react';
import { Button, View } from 'react-native';
import palette from '../../res/palette';

const OtherScreen = (props) => {
  _signOutAsync = async () => props.navigation.navigate('Login');
  
  return (
    <View>
      <Button title="Diğer: Çıkış" onPress={_signOutAsync} />
    </View>
  );
}
export default OtherScreen;