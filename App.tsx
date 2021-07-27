import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/RootStackParams";
import HomePage from "./src/HomePage";
import Layout1Page from "./src/Layout1Page";
import Layout2Page from "./src/Layout2Page";
import Layout3Page from "./src/Layout3Page";
import Layout4Page from "./src/Layout4Page";
import Layout5Page from "./src/Layout5Page";
import Layout6Page from "./src/Layout6Page";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Layout1Page"
          component={Layout1Page}
          options={{ title: "Layout 1" }}
        />
        <Stack.Screen
          name="Layout2Page"
          component={Layout2Page}
          options={{ title: "Layout 2" }}
        />
        <Stack.Screen
          name="Layout3Page"
          component={Layout3Page}
          options={{ title: "Layout 3" }}
        />
        <Stack.Screen
          name="Layout4Page"
          component={Layout4Page}
          options={{ title: "Layout 4" }}
        />
        <Stack.Screen
          name="Layout5Page"
          component={Layout5Page}
          options={{ title: "Layout 5" }}
        />
        <Stack.Screen
          name="Layout6Page"
          component={Layout6Page}
          options={{ title: "Layout 6" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
