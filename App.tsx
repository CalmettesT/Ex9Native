import React from 'react';
import {View, Button} from 'react-native';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://aa513382703c99e20cbeaab1aaf43e45@o4506716388458496.ingest.sentry.io/4506716390621184', // Remplacer par votre DSN Sentry
});

const App = () => {
  
  const sendLog = () => {
    Sentry.captureMessage('Test Message from React Native', 'info');
  };

  const triggerError = () => {
    try {
    throw new Error('This is a test error from React Native');
    } catch (error) {
    Sentry.captureException(error);
    }
   };
   
  return (
    <View>
      <Button title="Send Log to Sentry" onPress={sendLog} />
      <Button title="Send Error to Sentry" onPress={triggerError} />
    </View>
  );

};
export default App;
