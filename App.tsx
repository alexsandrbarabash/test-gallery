import React from "react";
import RoutingContainer from "./container/routing-container";
import UnsplashContainerProvider from "./container/unsplash-container/unsplash-container-provider";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <UnsplashContainerProvider>
        <RoutingContainer />
      </UnsplashContainerProvider>
    </>
  );
};

export default App;
