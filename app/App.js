// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TrackPlayer from "react-native-track-player";
import Navigator from './navigator/Navigator';
import { LoadingProvider } from "./LoadingContext";

enableScreens();

export default function App() {
  console.log(TrackPlayer);

  return (
    <LoadingProvider>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </LoadingProvider>
  );
}
