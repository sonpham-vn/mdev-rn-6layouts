import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

type layout5Prop = StackNavigationProp<RootStackParamList, "Layout5Page">;

function Layout5Page() {
  const navigation = useNavigation<layout5Prop>();
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
            <View style={box1_1}></View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
            <View style={box1_1}></View>
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
    alignItems:'center',
    justifyContent:'space-evenly'
  },

  box1_1: {
    height: "20%",
    width: "100%",
    backgroundColor: "purple",
    top:"10%",
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
    width: 60,
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 50,
    backgroundColor: "purple",
    borderRadius: 5,
  },
});

export default Layout5Page;
