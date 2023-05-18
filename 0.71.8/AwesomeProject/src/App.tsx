import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import { lightTheme } from '@theme';

function App () {
  const backgroundStyle = {
    backgroundColor: 'white'
  };

  return (
    <PaperProvider theme={lightTheme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Text>Hey</Text>
          <Button icon={'camera'}>Press me</Button>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
