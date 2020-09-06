import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import configureStore from './configureStore';
import LanguageProvider from './utils/LanguageProvider/index';
import translationMessages from './i18n';
const { store, persistor } = configureStore();
import Screen from 'screens/Screen';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider messages={translationMessages}>
          <Screen />
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
};
