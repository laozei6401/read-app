import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
