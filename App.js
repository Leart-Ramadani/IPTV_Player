import React, { useContext, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import SubCategoryLive from "./src/screens/SubCategoryLive";

const Stack = createStackNavigator();

function useStatusBarColor(color) {
  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS === "android") {
        StatusBar.setBackgroundColor(color, true);
      }
      StatusBar.setBarStyle("light-content");
    }, [color])
  );
}

function CategoriesScreenWrapper(props) {
  useStatusBarColor("#000");
  return <CategoriesScreen {...props} />;
}
function SubCategoryLiveWrapper(props) {
  useStatusBarColor("#000");
  return <SubCategoryLive {...props} />;
}

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreenWrapper} />
      <Stack.Screen name="SubCategoryLive" component={SubCategoryLiveWrapper} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "android" && <StatusBar animated={true} />}
      <AppStack />
    </NavigationContainer>
  );
}

export default () => (
  <App />
);

