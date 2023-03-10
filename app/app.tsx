/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import setupQueryClient from 'services/react-query-client';

import {RootStore} from 'models';
import {RootStoreProvider} from 'models/root-store/root-store-context';
import {setupRootStore} from 'models/root-store/setup-root-store';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {QueryClientProvider} from 'react-query';
import {AppNavigator, useNavigationPersistence} from 'stacks';
import * as storage from 'utils/storage';
export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App(): JSX.Element {
  // const {t} = useTranslation();

  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
  const queryClient = setupQueryClient();
  const {isRestored: isNavigationStateRestored} = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  );
  useEffect(() => {
    // LocaleConfig.locales = { ...LocaleConfig.locales, vi: calendarVi, en: calendarEn }
    // SplashScreen.hide()
    // init()
    (async () => {
      // await initFonts() // expo
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert(t('app.txtNoti'), t('app.txtExit'), [
  //       {
  //         text: t('app.txtCancel'),
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: t('app.txtConfirm'), onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  if (!rootStore || !isNavigationStateRestored) {
    return null as any;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </RootStoreProvider>
  );
}

export default App;
