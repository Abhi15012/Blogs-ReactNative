import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot, Stack } from 'expo-router'
import { ThemeProvider,useTheme } from '../endpoints/ThemeContext'

export default function _layout() {

  return (

    <SafeAreaView style={{flex:1}}>

      <ThemeProvider>
      <StatusBar style= 'dark'/>

<Slot/>
</ThemeProvider>
    </SafeAreaView>
  )
}