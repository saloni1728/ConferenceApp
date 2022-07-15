/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './src/Containers/Home';
import { Speakers } from './src/Containers/Speakers';
import { Conference } from './src/Containers/Conference';
import { Sessions } from './src/Containers/Sessions';
import { Story } from './src/Containers/Story';

const StackNavigator=createNativeStackNavigator();

const App= ()  => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='Home'>
      <StackNavigator.Screen name='Home' component={Home} options={{title:'Home'}}/>
      <StackNavigator.Screen name='Speakers' component={Speakers} options={{title:'Speakers'}}/>
      <StackNavigator.Screen name='Conference' component={Conference} options={{title:'Conference'}}/>
      <StackNavigator.Screen name='Sessions' component={Sessions} options={{title:'Sessions'}}/>
      <StackNavigator.Screen name='Story' component={Story} options={{title:'Story'}}/>
      </StackNavigator.Navigator >
    </NavigationContainer>
    
  );
};


export default App;
