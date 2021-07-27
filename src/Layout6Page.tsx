import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

type layout6Prop = StackNavigationProp<RootStackParamList, "Layout6Page">;

function Layout6Page() {
  const navigation = useNavigation<layout6Prop>();
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
      </View>
      <View style={[boxStyle, box2]}>
      <View style={containerStyle}>
          <View>
            <View style={box2_1}></View>
          </View>

          <View>
            <View style={box2_1}></View>
          </View>

          <View>
            <View style={box2_1}></View>
          </View>

          <View>
            <View style={box2_1}></View>
          </View>
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
    padding: 10,
  },

  textStyle: {
    textAlign: "center",
    top: 10,
  },

  containerStyle: {
    flex: 1,
    width:"100%",
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: "#e24ef5",
    borderRadius: 5,
    justifyContent:'space-evenly'
  },

  box1: {
    //backgroundColor: "red",
    flex: 4,
  },

  box1_1: {
    flex:1,
    backgroundColor: "purple",
    borderRadius: 5,
  },

  box2: {
    //backgroundColor: "blue",
    flex: 0.6,
    width:"100%",
    alignItems:'center',
  },

  box2_1: {
    width: Dimensions.get('window').width * 0.15,
    aspectRatio: 1,
    backgroundColor: "purple",
    margin: 10,
    borderRadius: 5,
  },
});

export default Layout6Page;
