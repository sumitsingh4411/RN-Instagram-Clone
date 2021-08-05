import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './component/Home';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import First from './component/screen/First';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <NativeRouter>
           <First/>
      </NativeRouter>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


