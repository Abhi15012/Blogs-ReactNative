import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";

export default function Navbar() {
  return (
    <View className="flex flex-row justify-between m-2 ">
      <Animated.View entering={SlideInLeft.duration(700).delay(200)}className="flex flex-row gap-1 mt-1 ">
      <FontAwesome5 name="blog" size={24} color="#00308F" />
        <Text className="text-xl font-bold ">Blog</Text>
      </Animated.View>
      <Animated.View  entering={SlideInRight.duration(600).delay(400)}className="flex-row gap-1">
<TouchableOpacity>
<Ionicons name="notifications-circle-outline" size={34} color="black" />

</TouchableOpacity>

        <TouchableOpacity className=" ">
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={["#fff", "#F6FB7A"]}
            style={{ width: 100, height: 40, borderRadius: 20 }}
          >
            <View className="  justify-center items-center">
        <View className=" flex-row mt-2">
        <FontAwesome
                  name="diamond"
                  size={20}
                  color="black"
                  style={{}}
                />
          
              <Text>{" "}Premium</Text>
        </View>
          
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons
          name="person-circle-outline"
          size={34}
          className="text-black"
        />
        </TouchableOpacity>
   
      </Animated.View>
    </View>
  );
}
