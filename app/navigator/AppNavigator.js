import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import i18n from '../i18n';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { AppVariables } from '../AppStyles';
import AudioPlayerScreen from '../screens/AudioPlayerScreen/AudioPlayerScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: AppVariables.colorLight,
      }}
      drawerContentOptions={{
        activeBackgroundColor: AppVariables.colorHeavy,
        activeTintColor: AppVariables.appWhite,
        labelStyle: {
          fontSize: AppVariables.fontSizeHeavy,
          borderRadius: AppVariables.appButtonBorderRadius,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: i18n.t('navigation.home'),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: i18n.t('navigation.settings'),
        }}
      />
      {/* Keep it last, because it shouldn't be visiblein the drawer menu */}
      <Drawer.Screen
        name="Player"
        itemStyles={{ opacity: 0 }}
        component={AudioPlayerScreen}
        options={{
          title: i18n.t('navigation.player'),
          drawerLabel: () => null
        }}
      />
    </Drawer.Navigator>
  );
}
