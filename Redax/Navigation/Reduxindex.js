import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddressScreen from '../Screens/AddressScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import QualificationScreen from '../Screens/QualificationScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import UserDetail from '../Screens/UserDetails';

const Stack = createStackNavigator();

export default function Reduxindex() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />

      <Stack.Screen
        name="QualificationScreen"
        component={QualificationScreen}
      />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}
