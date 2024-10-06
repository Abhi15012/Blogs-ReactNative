import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../../endpoints/ThemeContext";
export default function PhoneLogin() {
  const route = useRouter();
  const routeSign = useRouter();
  const routeEmail = useRouter();
  const { isDarkMode } = useTheme();
  const loginNav = () => {
    route.navigate("./Index");
  };
  const signup = () => {
    routeSign.navigate("./SignUp");
  };
  const [Num, setNum] = useState(false);

  const email = () => {
    routeEmail.navigate("../Auth/Usermail");
  };
  return (
    <View className={`flex  justify-center w-full items-center my-auto mx-auto h-full  ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
    <View className="flex flex-col w-[90%] justify-center  items-center">
      <Text className={`text-lg font-bold my-20 ${isDarkMode ? 'text-white' : 'text-black'}`}>Enter Your Mobile Number</Text>
      <View className="flex flex-row ">
        <TextInput
          placeholder="+91"
          className={`bg-slate-200 h-14 w-[20%] rounded-2xl px-4 ${[
            Num ? "border-2 border-b-4 border-slate-800" : "border-none",
          ]}`}
          onFocus={() => {
            setNum(true);
          }}
          onBlur={() => {
            setNum(false);
          }}
        ></TextInput>
        <TextInput
          placeholder="Your Mobile Number"
          keyboardType="numeric"

          className={`bg-slate-200 h-14 w-[80%] rounded-2xl px-4 ${[
            Num ? "border-2 border-b-4 border-slate-800" : "border-none",
          ]}`}
          onFocus={() => {
            setNum(true);
          }}
          onBlur={() => {
            setNum(false);
          }}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={loginNav}
        className="mx-auto mt-4 h-12 bg-green-500 w-40  rounded-xl"
      >
        <Text className="mx-auto my-auto rounded-xl text-lg">Send OTP</Text>
      </TouchableOpacity>

      <View className={`flex flex-row mx-auto mt-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Dont't Have an account ? </Text>
        <TouchableOpacity onPress={signup}>
          <Text className="text-blue-500 underline">Create an account</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
