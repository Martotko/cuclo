// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigator/Navigator';
import { LoadingProvider } from "./LoadingContext";

enableScreens();

export default function App() {
  return (
    <LoadingProvider>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </LoadingProvider>
  );
}
