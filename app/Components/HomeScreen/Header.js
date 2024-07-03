import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import Logo from '../../Asset/images/lcu.jpeg'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  const {isLoaded,isSignedIn,user} = useUser();
  return isLoaded&&(
    <View>
      <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
        <View style={styles.rowStyle}>
          <Image source={{uri:user?.imageUrl}}
          style={{width:40,height:40,borderRadius:99}}/>
          <View>
            <Text style={{color:Colors.WHITE,fontFamily:'outfit'}}>Welcome,</Text>
            <Text style={styles.mainText}>{user?.fullName}</Text>
          </View>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.mainText}>Computer Science</Text>
          <Image source={Logo} style={{width:35,height:35,borderRadius:99}} />
        </View>
      </View>
      <View style={{backgroundColor:Colors.WHITE,paddingLeft:20,display:'flex',flexDirection:'row',justifyContent:'space-between',borderRadius:99,paddingRight:7,marginTop:25}}>
        <TextInput placeholder='Search Courses' placeholderTextColor="#000" style={{fontFamily:'outfit',fontSize:18}}/>
        <Ionicons name='search-circle' size={50} color="#233142" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText:{
    color:Colors.WHITE,
    fontSize:20,
    fontFamily:'outfit',
  },
  rowStyle:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center'
  }
})