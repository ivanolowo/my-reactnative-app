import React from 'react';
import { Provider as PaperProvider,Text, TextInput } from 'react-native-paper';
import { LoginScreen } from './App/screens/login/login.screen'
import { theme } from './App.style'


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});
 */