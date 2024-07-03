import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import OptionItem from './OptionItem'
import { enrollCourse } from '../../Services'

export default function DetailSection({course,enrollCourse}) {
  return (
    <View style={{padding:10,borderRadius:15,backgroundColor:Colors.WHITE}}>

      <Image source={{uri:course?.banner?.url}}
      style={{width:Dimensions.get('screen').width*0.88,height:190,borderRadius:15}}
      />
      <View style={{padding:10}}>
      <Text style={{fontSize:22,fontFamily:'outfit-medium',marginTop:10}}>{course.name}</Text>

      <View>
        <View style={styles.rowStyle}>
        <OptionItem icon={'book-outline'} value={course.chapters?.length+" Chapter"} />
        <OptionItem icon={'time-outline'} value={course.time?.length+" Time"} />
        </View>
        
        <View style={styles.rowStyle}>
        <OptionItem icon={'person-circle-outline'} value={course.author} />
        <OptionItem icon={'cellular-outline'} value={course.level?.length+" Level"} />
        </View>
        <View>
          <Text style={{fontFamily:'outfit-medium',fontSize:20}}>Description</Text>
          <Text style={{fontFamily:'outfit',color:Colors.GRAY,lineHeight:25}}>{course.description?.markdown}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',gap:10,}}>
          {/* <TouchableOpacity
           style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15}}>
            <Text style={{fontFamily: 'outfit',color:Colors.WHITE,textAlign:'center',fontSize:17}}>Attend Lecture</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity style={{padding:15,backgroundColor:Colors.SECONDARY,borderRadius:15}}>
            <Text style={{fontFamily: 'outfit',color:Colors.WHITE,textAlign:'center',fontSize:17}}>Membership</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rowStyle:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
  }
})