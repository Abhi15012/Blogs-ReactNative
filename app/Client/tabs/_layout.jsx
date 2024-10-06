import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 14, fontWeight: "700", marginBottom: 5 },
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: "auto",

          left: 40,
          borderRadius: 30,
          height: 60,
          width: 300,
          borderWidth: 1,
          borderColor: "#ccc",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 5.84,
          elevation: 5,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#AED2FF",
        tabBarShowLabel: false,
// tabBarActiveBackgroundColor:"yellow",

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="Screen"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo size={24} name="home" color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Profile"
   
        options={{
          // title: "Profile",
          tabBarLabelStyle: { color:"transparent" , marginBottom:5  },
          tabBarShowLabel: false,

          tabBarIcon: ({ color }) => (
            <View className="bg-[#E384FF] border-spacing-2  border-[5px] border-sky-200 rounded-full h-16 w-16 flex items-center justify-center ">
              <FontAwesome name="user"  size={24} color={color} />
            </View>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Entypo name="camera" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
