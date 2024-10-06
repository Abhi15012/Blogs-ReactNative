import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { LoginFetch } from '../../endpoints/endPoints';
import { useTheme } from '../../endpoints/ThemeContext';
export default function Usermail() {
  const router = useRouter();
const {isDarkMode}=useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [borderName, setBorderName] = useState(false);
  const [confirmPassword, setConfirmPass] = useState(false);

const MainPage=useRouter()
  const onSubmit = async (data) => {
    try {
      const url = "http://192.168.1.10:8080/admin/login";
      await LoginFetch(url, data);
      console.log("Login successful");
      MainPage.navigate('../../Client')
    } catch (error) {
      console.error("Login failed:", error);

    }

    console.log(data)
  };

  return (
    <View className="p-4 ">
     
     <Text className={`text-lg mx-auto mt-5 mb-10 ${isDarkMode ? 'text-white' : 'text-black'} font-semibold `}>Login with your email</Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email format",
          },
        }}
        render={({ field: { onChange, onBlur, value }, fieldState: { error, isFocused } }) => (
          <View className="mb-6">
            <Text className="text-sm ml-2 mb-2">Email/Username</Text>
            <TextInput
              placeholder="email/username here"
              className={`bg-slate-100 h-14 rounded-2xl px-4 ${isFocused ? 'border-2 border-b-4 border-slate-800' : 'border-none'}`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && <Text className="text-red-300 ml-2 mt-1">{error.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
        }}
        render={({ field: { onChange, onBlur, value }, fieldState: { error, isFocused } }) => (
          <View className="mb-6">
            <Text className="text-sm  ml-2 mb-2">Password</Text>
            <TextInput
              placeholder="Enter password"
              className={`bg-slate-100 h-14 rounded-2xl  px-4 ${isFocused ? 'border-2 border-b-4 border-slate-800' : 'border-none'}`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />t
            {error && <Text className="text-purple-300 ml-2 mt-1">{error.message}</Text>}
          </View>
        )}
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}

        className={`mx-auto mt-4 h-12 w-40 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-purple-600' : 'bg-green-500'}`}
      >
        <Text className="text-lg font-semibold text-white">
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-10">
        <Text className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.navigate('../Auth/SignUp')}>
          <Text className={`text-sm ${isDarkMode ? 'text-green-500 ' : 'text-blue-500'} underline`}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
