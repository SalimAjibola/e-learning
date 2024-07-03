import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import CourseList2 from '../Components/HomeScreen/CourseList2'
import Logo from '../Asset/images/lcu.jpeg'
import Pdf from '../Asset/images/pdf.jpeg'

export default function MyCourse() {
  return (
    <View>
      <View style={{height:160,backgroundColor:Colors.SECONDARY,padding:30}}>
      <View style={styles.rowStyle}>
          <Image source={Logo} style={{ width: 100, height: 100, borderRadius: 99 }} />
          <Text style={{ fontFamily: 'outfit-bold', color: Colors.WHITE, fontSize: 30 }}>My Courses</Text>
        </View>
      </View>
      <CourseList2 level={'Level400'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'outfit',
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10
  }
})