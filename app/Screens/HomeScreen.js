import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor:'#233142',height:250,padding:20}}>
      <Header />
      </View>
      <View style={{padding:20}}>
        <View style={{marginTop: -90}}>
        <CourseList level={'Level400'}/>
        </View>
        <CourseList level={'Level300'}/>
      </View>
    </View>
  )
}