import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

type layout3Prop = StackNavigationProp<RootStackParamList, "Layout3Page">;

function Layout3Page() {
  const navigation = useNavigation<layout3Prop>();
  const {
    wrapper,
    textStyle,
    boxStyle,
    containerStyle,
    box1,
    box2,
    box1_1,
    box1_2,
    box2_1,
    box2_2
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={[boxStyle, box1]}>
        <View style={box1_1}></View>
        <View style={box1_2}></View>
      </View>
      <View style={[boxStyle, box2]}>
        <View style={box2_1}></View>
        <View style={box2_2}></View>
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
    backgroundColor: "#7ca6d8",
    borderRadius: 5,
  },

  box1: {
    //backgroundColor: "red",
    flex: 1,
    justifyContent: "flex-end",
  },

  box1_1: {
    height: 40,
    width: 40,
    alignSelf: "flex-end",
    marginTop: 5,
    backgroundColor: "purple",
    borderRadius: 5
  },

  box1_2: {
    height: 120,
    backgroundColor: "purple",
    marginTop: 5,
    borderRadius: 5
  },

  box2: {
    //backgroundColor: "blue",
    flex: 2,
    justifyContent:'flex-end',
  },

  box2_1: {
    height: 80,
    marginTop: 5,
    backgroundColor: "purple",
    borderRadius: 5
  },

  box2_2: {
    height: 40,
    backgroundColor: "purple",
    marginTop: 5,
    marginBottom: 50,
    borderRadius: 5
  },

});

export default Layout3Page;
