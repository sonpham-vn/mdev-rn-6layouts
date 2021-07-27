import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

type layout1Prop = StackNavigationProp<RootStackParamList, "Layout1Page">;

function Layout1Page() {
  const navigation = useNavigation<layout1Prop>();
  const {
    wrapper,
    boxStyle,
    box0,
    box1,
    box2,
    box1_1,
    box2_1,
    box2_2,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={[boxStyle, box0]}></View>
      <View style={[boxStyle, box1]}>
        <View style={box1_1}></View>
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

  box0: {
    backgroundColor: "purple",
    flex: 1,
  },

  box1: {
    //backgroundColor: "red",
    flex: 0.5,
    justifyContent: "flex-start",
  },

  box1_1: {
    height: 40,
    marginTop: 5,
    backgroundColor: "purple",
    borderRadius: 5,
  },

  box2: {
    //backgroundColor: "blue",
    flex: 1.5,
    justifyContent: "flex-end",
  },

  box2_1: {
    height: 40,
    marginTop: 5,
    backgroundColor: "purple",
    borderRadius: 5,
  },

  box2_2: {
    height: 40,
    backgroundColor: "purple",
    marginTop: 5,
    marginBottom: 50,
    borderRadius: 5,
  },
});

export default Layout1Page;
