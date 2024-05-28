import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  SplashScreen
} from "./screen"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Splash" 
          options={{headerShown:false}}
          component={SplashScreen} />

        <Stack.Screen name="Login" 
          options={{headerShown:false}}
          component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;