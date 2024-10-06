import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'

export default function Hero() {
  const[scaleBar,setScaleBar]=useState(false)
  const[Bar,setBar]=useState(false)

  return (
    <View className="flex ">
      <Animated.View  className={`flex-row ${scaleBar? "scale-1 transition-all translate-x-1 duration-1000 ease-in-out": "scale-0"}  absolute mt-10 ml-4  w-[90%] h-14 bg-white rounded-2xl`}>
        <TextInput placeholder='Search here' className="h-14 w-[80%] px-2 text-xl"></TextInput>
        
    <Animated.View entering={FadeIn.duration(1000) } className="w-44 my-auto text-lg text-center">
      <TouchableOpacity onPress={()=>{
        setBar(true)
      }}>
    <Ionicons name="search-circle" size={54} color="black" />

      </TouchableOpacity>
    </Animated.View>
      </Animated.View>
      <View className={`flex-row ${scaleBar?'scale-0':'scale-1 transition-all '}`}>
    <Animated.View entering={FadeInLeft.duration(1000)}>
<Image source={require('../../../../../assets/read.png')} className="w-32 h-32 rounded-full"/>
    </Animated.View>
    <Animated.Text entering={FadeIn.duration(1000) } className="w-44 my-auto text-lg text-center">
      What do you want to Read today ?
    </Animated.Text>

    <Animated.View entering={FadeIn.duration(1000) } className="w-44 my-auto text-lg text-center">
      <TouchableOpacity onPress={()=>{
        setScaleBar(true)
      }}>
    <Ionicons name="search-circle" size={54} color="black" />

      </TouchableOpacity>
    </Animated.View>
    </View>
    </View>
  )
}