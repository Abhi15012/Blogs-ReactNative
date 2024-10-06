import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Data from '../Profile/Data';
import { useTheme } from '../../../../endpoints/ThemeContext';


export default function Profilelayout() {
    const { isDarkMode } = useTheme();



  return (
    <View style={{ flex: 1 }} className={`${isDarkMode ? 'bg-black' : 'bg-white'}`}>
<Data/>
    </View>
  );
}
