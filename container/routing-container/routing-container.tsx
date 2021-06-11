import React from "react";
import HomeScreen from "../../screens/home-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PhotoScreen from "../../screens/photo-screen";

const Stack = createStackNavigator();

const RoutingContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={() => <HomeScreen />} />
        <Stack.Screen name="Photo" component={() => <PhotoScreen />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutingContainer;
