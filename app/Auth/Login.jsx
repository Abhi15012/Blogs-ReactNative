import { View, Text, ScrollView, TextInput, Image,  } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeIn, FadeInDown, SlideInDown, SlideInLeft, SlideInRight, SlideInUp ,Easing, useSharedValue, useAnimatedStyle, withSpring, useDerivedValue} from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import Usermail from './Usermail'
import { useTheme } from '../../endpoints/ThemeContext'


export default function html() {

const {isDarkMode}=useTheme()
const LogPhone=useRouter()

const scale=useSharedValue(0)

const fun=()=>{
scale.value=1
}

const value = useDerivedValue(() => ({
  scale: scale.value
}));


const  AnimStyle=useAnimatedStyle(()=>({

transform:[{scale:withSpring(scale.value,)}]

}))





  return (
  
    <View  className={`h-full ${isDarkMode ? 'bg-black' : 'bg-sky-500'}  `}>
        <ScrollView>
<View className="m-3   rounded-md h-screen flex justify-start items-center">
<Animated.Text entering={SlideInLeft.duration(400)}  className={` mt-2 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Welcome to Blogs</Animated.Text>
<Animated.Text entering={SlideInRight.duration(600)} className={`mt-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Login</Animated.Text>
<Animated.View entering={FadeIn.duration(500)} className="rounded-xl" >
<Image source={require('../../assets/reader.jpeg')} className="rounded-2xl" style={{width:100 , height:160}}/>
</Animated.View>


<Animated.View entering={SlideInDown.duration(500).delay(300)}className={`h-full w-full  rounded-3xl mt-5 flex    text-center ${isDarkMode ? 'bg-slate-600' : 'bg-white'}`}>

<Usermail/>

</Animated.View>
</View>
      </ScrollView>
    </View>
  
  )
}