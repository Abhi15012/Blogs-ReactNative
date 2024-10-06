import { View, Text, ScrollView, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Animated, {
  FadeIn,
  FadeInDown,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  Easing,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "../../endpoints/ThemeContext";

export default function SignUp() {
  const [border, setBorder] = useState(false);
  const [borderName, setBorderName] = useState(false);
  const [confirmPassword, setConfirmPass] = useState(false);
  const [Num, setNum] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const formControl = async (data) => {
    console.log(data);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  const { isDarkMode } = useTheme();
  const [borderPassword, setBorderNamePass] = useState(false);

  return (
    <View className={`h-full   ${isDarkMode ? 'bg-black' : 'bg-yellow-400'}`}>
      <ScrollView>
        <View className="m-3   rounded-md h-screen flex justify-start items-center">
          <Animated.Text
            entering={SlideInLeft.duration(400)}
                className={`mt-2 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}  
          >
            Welcome to Blogs
          </Animated.Text>
          <Animated.Text
            entering={SlideInRight.duration(600)}
            className={`mt-3 text-xl font-semibold ${isDarkMode ?   'text-white': 'text-white' }`}
          >
            Create Your Account
          </Animated.Text>

          <Animated.View
            entering={SlideInDown.duration(600).delay(400)}
            className={`h-full mt-10 w-full bg-white rounded-3xl  flex    text-center ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}
          >
            <View className="justify-between mt-10 w-[90%] mx-auto h-20 mb-10">
              <Text className={`text-sm ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Name</Text>
              <Controller
                control={control}
                name="Name"
                rules={{
                  required: true,
                  minLength: {
                    value: 3,
                    message: "UserName must be above 3 Characters",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => {
                 return <TextInput
                    onChangeText={onChange}
                    value={value}
                    placeholder="Your Name"
                    className={`${isDarkMode ? 'bg-slate-400' : 'bg-slate-100'} h-14 rounded-2xl px-4 ${[
                      borderName
                        ? "border-2 border-b-4 border-slate-800"
                        : "border-none",
                    ]}`}
                    onFocus={() => {
                      setBorderName(true);
                    }}
                    onBlur={() => {
                      setBorderName(false);
                      onBlur();
                    }}
                  >
                    {errors.Name && <Text className="text-red-500">{errors.Name.message}</Text>}
                  </TextInput>;
                }}
              ></Controller>
            </View>

            <View className="justify-between  h-20 mx-auto w-[90%] mb-10">
              <Text className={`text-sm ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Mobile Number</Text>
              <View className="flex flex-row">
                <TextInput
                  placeholder="+91"
                  className={`${isDarkMode ? 'bg-slate-400' : 'bg-slate-100'} h-14 w-[20%] rounded-2xl px-4 ${[
                    Num
                      ? "border-2 border-b-4 border-slate-800"
                      : "border-none",
                  ]}`}
                  onFocus={() => {
                    setNum(true);
                  }}
                  onBlur={() => {
                    setNum(false);
                  }}
                  keyboardType="phone-pad"
                ></TextInput>
                <TextInput
                  placeholder="Your Mobile Number"
                  className={`${isDarkMode ? 'bg-slate-400' : 'bg-slate-100'} h-14 w-[80%] rounded-2xl px-4 ${[
                    Num
                      ? "border-2 border-b-4 border-slate-800"
                      : "border-none",
                  ]}`}
                  onFocus={() => {
                    setNum(true);
                  }}
                  onBlur={() => {
                    setNum(false);
                  }}
                  keyboardType="phone-pad"
                ></TextInput>
              </View>
            </View>

            <View className="justify-between h-20 mx-auto w-[90%] mb-10">
              <Text className={`text-sm ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</Text>
              <TextInput
                placeholder="Your Email id "
                className={`${isDarkMode ? 'bg-slate-400' : 'bg-slate-100'} h-14 rounded-2xl px-4 ${[
                  border
                    ? "border-2 border-b-4 border-slate-800"
                    : "border-none",
                ]}`}
                onFocus={() => {
                  setBorder(true);
                }}
                onBlur={() => {
                  setBorder(false);
                }}
              ></TextInput>
            </View>

            <View className="justify-between h-20 mb-10  w-[90%] mx-auto">
              <Text className={`text-sm ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Set Password</Text>
              <TextInput
                placeholder=" "
                className={`${isDarkMode ? 'bg-slate-400' : 'bg-slate-100'} h-14 rounded-2xl px-4 ${[
                  borderPassword
                    ? "border-2 border-b-4 border-slate-800"
                    : "border-none",
                ]}`}
                onFocus={() => {
                  setBorderNamePass(true);
                }}
                onBlur={() => {
                  setBorderNamePass(false);
                }}
                secureTextEntry={true}
              ></TextInput>
            </View>

            <View className="justify-between h-20 mb-10  w-[90%] mx-auto">
              <Text className={`text-sm ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Confirm Password</Text>
              <TextInput
                placeholder=" "
                className={`${isDarkMode ? 'bg-slate-400' : 'bg-slate-100'} h-14 rounded-2xl px-4 ${[
                  confirmPassword
                    ? "border-2 border-b-4 border-slate-800"
                    : "border-none",
                ]}`}
                onFocus={() => {
                  setConfirmPass(true);
                }}
                onBlur={() => {
                  setConfirmPass(false);
                }}
                secureTextEntry={true}
              ></TextInput>
            </View>

            <TouchableOpacity
              onPress={handleSubmit(formControl)}
              className={`mx-auto mt-4 h-12 bg-sky-400/90 w-40  rounded-xl ${isDarkMode ? 'bg-pink-500' : 'bg-sky-400/90'}`}
            >
              <Text className="mx-auto my-auto text-white font-semibold text-lg">Signup</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
}
