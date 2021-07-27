import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type layout2Prop = StackNavigationProp<RootStackParamList, 'Layout2Page'>;

function Layout2Page() {
  const navigation = useNavigation<layout2Prop>();
  const { wrapper, boxStyle, containerStyle, box1, box2, box3 } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={[boxStyle, box1]}>
        <View style={containerStyle}>
        </View>
      </View>
      <View style={[boxStyle, box2]}>
        <View style={containerStyle}>
        </View>
      </View>
      <View style={[boxStyle, box3]}>
        <View style={containerStyle}>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },

  boxStyle: {
    width: "100%",
    padding: 10,
  },

  containerStyle: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 5
  },

  box1: {
    //backgroundColor: "red",
    flex: 1,
  },

  box2: {
    //backgroundColor: "blue",
    flex: 3,
  },

  box3: {
    //backgroundColor: "green",
    flex: 0.6,
  },
});

export default Layout2Page;