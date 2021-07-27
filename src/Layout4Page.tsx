import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

type layout4Prop = StackNavigationProp<RootStackParamList, "Layout4Page">;

function Layout4Page() {
  const navigation = useNavigation<layout4Prop>();
  const {
    wrapper,
    textStyle,
    boxStyle,
    containerStyle,
    box1,
    box2,
    box1_1,
    box2_1,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={[boxStyle, box1]}>
        <View style={containerStyle}>
          <View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
          </View>

          <View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
          </View>

          <View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
          </View>
        </View>
      </View>
      <View style={[boxStyle, box2]}>
        <View style={box2_1}></View>
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
    padding: 10,
  },

  textStyle: {
    textAlign: "center",
    top: 10,
  },

  containerStyle: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    //backgroundColor: "#7ca6d8",
    borderRadius: 5,
    marginTop: 20
  },

  box1: {
    //backgroundColor: "red",
    flex: 2,
    alignItems:'center'
  },

  box1_1: {
    width: Dimensions.get('window').width * 0.3,
    aspectRatio: 1,
    backgroundColor: "purple",
    margin: 5,
    borderRadius: 5,
  },

  box2: {
    //backgroundColor: "blue",
    flex: 1,
    justifyContent: "flex-end"
  },

  box2_1: {
    height: 60,
    aspectRatio: 1,
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 50,
    backgroundColor: "purple",
    borderRadius: 5,
  },
});

export default Layout4Page;
