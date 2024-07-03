import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import CourseDetailScreen from '../Screens/CourseDetailScreen';

const Stack=createStackNavigator();
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='couse-detals' component={CourseDetailScreen} />
    </Stack.Navigator>
  )
}