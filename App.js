import { StatusBar, SafeAreaView } from 'react-native';
import { useCallback } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import{useFonts,Montserrat_400Regular,Montserrat_700Bold}from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import mock from  './src/mocks/cestaMock';

SplashScreen.preventAutoHideAsync();

export default function App()
{
  const [ fonteCarregada ] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView style={{flex:1}} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
