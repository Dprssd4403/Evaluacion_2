
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
const App = ()=> {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;
