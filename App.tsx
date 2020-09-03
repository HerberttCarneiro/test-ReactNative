import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes";
import * as Font from "expo-font";

export default function App() {
  function loadFonts() {
    Font.loadAsync({
      Template: require("./assets/icomoon/icomoon.ttf"),
    });
  }
  loadFonts();

  return (
    <NavigationContainer>
      <AppRoutes></AppRoutes>
    </NavigationContainer>
  );
}
