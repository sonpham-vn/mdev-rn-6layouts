import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';


type homeProp = StackNavigationProp<RootStackParamList, 'HomePage'>;

function HomePage() {
  const navigation = useNavigation<homeProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Please choose layout page</Text>
      <Button title="Layout 1" onPress={() => navigation.navigate('Layout1Page')} />
      <Button title="Layout 2" onPress={() => navigation.navigate('Layout2Page')} />
      <Button title="Layout 3" onPress={() => navigation.navigate('Layout3Page')} />
      <Button title="Layout 4" onPress={() => navigation.navigate('Layout4Page')} />
      <Button title="Layout 5" onPress={() => navigation.navigate('Layout5Page')} />
      <Button title="Layout 6" onPress={() => navigation.navigate('Layout6Page')} />
    </View>
  );
}

export default HomePage;