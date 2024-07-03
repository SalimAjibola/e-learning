import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen"
import MyCourse from "../Screens/MyCourse"
import LeaderBoard from "../Screens/LeaderBoard"
import ProfileScreen from "../Screens/ProfileScreen"
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeScreenNavigation} 
      options={{
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="My Courses" component={MyCourse} 
      options={{
        tabBarIcon:({color,size})=>(
          <FontAwesome name="book" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="PDF" component={LeaderBoard} 
      options={{
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="leaderboard" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="settings-sharp" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}