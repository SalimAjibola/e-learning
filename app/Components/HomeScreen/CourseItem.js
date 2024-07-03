import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function CourseItem({item}) {
  return (
    <View style={{ padding: 10, backgroundColor: Colors.WHITE, marginRight: 15, borderRadius: 15, marginBottom:40 }}>
            <Image source={{ uri: item?.banner?.url }}
              style={{ width: 210, height: 120, borderRadius: 15 }}
            />
            <View style={{ padding: 7 }}>
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 17
              }}>
                {item.name}
              </Text>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center,gap:5', marginTop: 5 }}>
                <Ionicons name="book-outline" size={18} color="black" />
                <Text style={{fontFamily:'outfit'}}>{item?.chapters?.length} Chapters</Text>
              </View>
              <View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center,gap:5', marginTop: 5 }}>
                  <Ionicons name="time-outline" size={18} color="black" />
                  <Text style={{fontFamily:'outfit'}}>{item?.time}</Text>
                </View>
              </View>
            </View>
            <Text style={{marginTop:5,color:Colors.PRIMARY,fontFamily:'outfit-medium'}}>{item.unit==0?'Free':item.price}</Text>
            </View>
          </View>
  )
}