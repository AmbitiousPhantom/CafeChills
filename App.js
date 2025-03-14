import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native';
import {GuestMenu, SignUp, HomeMenu, Welcome, Login} from "./Screens";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome'
      component={Welcome}
      options={{headerShown: false}}/>
    

      <Stack.Screen name='HomeMenu'
      component={HomeMenu}
      options={{headerShown: false}}/>
      
      <Stack.Screen name='SignUp'
      component={SignUp}
      options={{headerShown: false}}/>

      <Stack.Screen name='GuestMenu'
      component={GuestMenu}
      options={{headerShown: false}}/>

      <Stack.Screen name='Login'
      component={Login}
      options={{headerShown: false}}/>
      

      </Stack.Navigator>
    </NavigationContainer>

  );
}
