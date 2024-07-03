import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../Utils/Colors';
import Logo from '../Asset/images/lcu.jpeg'

export default function ProfileScreen() {
  const { isLoaded, isSignedIn, user } = useUser();
  return isLoaded && (
    <View>
      <View style={{ height: 160, backgroundColor: Colors.SECONDARY, padding: 30 }}>
        <View style={styles.rowStyle}>
          <Image source={Logo} style={{ width: 100, height: 100, borderRadius: 99 }} />
          <Text style={{ fontFamily: 'outfit-bold', color: Colors.WHITE, fontSize: 30 }}>My Profile</Text>
        </View>
      </View>
      <View style={{marginTop:10}}>
        
        <View style={styles.rowStyle}>
          <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>Student Profile Photo:</Text>
          <Image source={{ uri: user?.imageUrl }}
          style={{ width: 100, height: 100, borderRadius: 99, justifyContent: 'center' }} />
        </View>

        <View style={styles.rowStyle}>
          <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>Student Full Name:</Text>
          <Text style={styles.mainText}>{user?.fullName}</Text>
        </View>

        <View style={styles.rowStyle}>
          <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>Faculty:</Text>
          <Text style={styles.mainText}>Applied Science</Text>
        </View>

        <View style={styles.rowStyle}>
          <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>Department:</Text>
          <Text style={styles.mainText}>Computer Science</Text>
        </View>

        <View style={styles.rowStyle}>
          <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>Matric No:</Text>
          <Text style={styles.mainText}>LCU/UG/20/</Text>
        </View>

        <View style={styles.rowStyle}>
          <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>Level:</Text>
          <Text style={styles.mainText}>400</Text>
        </View>

      </View>
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