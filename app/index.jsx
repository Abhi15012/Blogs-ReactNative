import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import "../global.css";
import { useTheme } from "../endpoints/ThemeContext";


import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Link, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function IntroPage() {

  const { isDarkMode } = useTheme();



  const anim = useSharedValue(0.5);
  const route12 = useRouter();

  const route = useRouter();
  const Animstyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: anim.value,
      },
    ],
  }));

  useEffect(()=>{
setTimeout(() => {
  route.navigate('Entry')
},1000);
  },[])



  useEffect(() => {
    anim.value = withTiming(anim.value * 2, { duration: 1000 });

    return () => {};
  }, []);

  return (
    <View className={`h-full ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <View className="m-4  h-screen flex justify-center items-center">
        <Animated.View className="justify-between " style={[Animstyle]}>
          <Image
            source={require("../assets/Blog.jpeg")}
            style={{ width: 90, height: 90, marginBottom: 20 }}
          />
        </Animated.View>
        <Text className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Blogs</Text>

      </View>
    </View>
  );
}
