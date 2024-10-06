import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from '../endpoints/ThemeContext'
import { useRouter } from 'expo-router';

export default function Entry() {
  const routePhone = useRouter();
  const routeSign = useRouter();
  const routeLogin = useRouter();
  const { isDarkMode } = useTheme();
  return (
    <View className={`h-full w-full flex  items-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <View className='flex flex-col items-center gap-4 mt-2 '>
<Text className={`text-2xl   font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Welcome to Blogs</Text>
<Image source={require('../assets/Blog.jpeg')} style={{width:100,height:100 ,borderRadius:100, marginBottom:25}}/>
<Text className={`text-lg dark:text-white ${isDarkMode ? 'text-white' : 'text-black'} font-medium`}>Please Log in to Continue</Text>

</View>
<View className='flex flex-col items-center gap-4 mt-2 '>
  <TouchableOpacity onPress={()=>routePhone.navigate('Auth/PhoneLogin')} className={`bg-transparent border-[1px] border-x-2 ${isDarkMode ? 'border-white' : 'border-black'} p-2 rounded-3xl  min-w-[80%]`}>
  <View className='flex flex-row mx-auto px-auto justify-center items-center  '>
    <FontAwesome name='mobile' size={25} color={isDarkMode ? 'white' : 'black'} />
  <Text className={`dark:text-white ml-3 text-black text-center text-[16px] font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
  Continue with Mobile Number
</Text>
  </View>

</TouchableOpacity>

<TouchableOpacity className={`bg-transparent border-[1px] gap-x-8 ${isDarkMode ? 'border-white' : 'border-black'} p-2 rounded-3xl  min-w-[80%]`}>
  <View className='flex flex-row mx-auto px-auto justify-center items-center  '>
<Image source={require('../assets/google.webp')} style={{width:30,height:30 ,borderRadius:100}}/>
  <Text className={`dark:text-white ml-4 text-black text-center text-[16px] font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
  Continue with Google
</Text>
  </View>

</TouchableOpacity>


<TouchableOpacity className={`bg-transparent border-[1px] ${isDarkMode ? 'border-white' : 'border-black'} gap-x-8   p-2 rounded-3xl  min-w-[80%]`}>
  <View className='flex flex-row mx-auto  justify-center items-center   '><Image source={require('../assets/app.png')} style={{width:30,height:30 ,borderRadius:100}}/>
  <Text className={`dark:text-white ml-4 text-black text-center text-[16px] font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
  Continue with Apple
</Text>
  </View>

</TouchableOpacity>




  <TouchableOpacity className={`bg-transparent border-[1px] ${isDarkMode ? 'border-white' : 'border-black'} gap-x-8   p-2 rounded-3xl  min-w-[80%]`}>
  <View className='flex flex-row mx-auto  justify-center items-center   '><Image source={require('../assets/facebook.png')} style={{width:28,height:28 ,borderRadius:100}}/>
  <Text className={`dark:text-white ml-4 text-black text-center text-[16px] font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
  Continue with Facebook
</Text>
  </View>

</TouchableOpacity>
<TouchableOpacity onPress={()=>routeLogin.navigate('Auth/Login')} className={` h-12 w-40 rounded-xl ${isDarkMode ? 'bg-purple-500' : 'bg-green-500'}`}>
<Text className='text-white mx-auto my-auto text-center text-lg font-medium '>Login</Text>
</TouchableOpacity>
</View>

<View className='flex flex-row items-center my-4 bg-slate-400 h-[1px] w-[80%] rounded-xl gap-x-2'>

</View>
<View className='flex flex-col items-center gap-x-2  mt-1'>
<Text className={`text-black text-center text-lg mb-6 font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Create an account</Text>
<TouchableOpacity onPress={()=>routeSign.navigate('Auth/SignUp')} className={` h-12 w-40 rounded-xl ${isDarkMode ? 'bg-pink-500' : 'bg-cyan-500' }`}>
<Text className='text-white mx-auto my-auto text-center text-lg font-medium '>Signup</Text>
</TouchableOpacity>
  </View>

    </View>
  )
}