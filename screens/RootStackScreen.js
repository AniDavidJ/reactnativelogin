
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./LoginScreen";
import SplashScreen from "./SplashScreen";
import SignupScreen from "./SignupScreen";
import Welcome from "./Welcome";




const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
      <RootStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },headerShown: false
      }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
        <RootStack.Screen name="Welcome" component={Welcome} />

      </RootStack.Navigator>
  );
}

export default RootStackScreen;