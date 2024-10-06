import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import Navbar from './Components/Navbar'
import Hero from  './Components/Hero'

export default function Screen() {
  return (
    <View className="flex bg-cyan-400/30 h-full ">
      <View className="m-2 h-full">
 <View><Navbar/></View>
 <View className="mt-2"><Hero/></View>


      </View>
 
    </View>
  )
}