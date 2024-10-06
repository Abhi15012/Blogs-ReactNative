import { useRouter } from "expo-router";
import React, { useState, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, TextInput } from "react-native";

const OTP_LENGTH = 6;

export default function Index() {
const route=useRouter()
  const main=()=>{
route.navigate('../Client')
  }
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value) {
      // Move focus to the next input if value is entered
      if (index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      // Move focus to the previous input if value is deleted
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      // Move focus to the previous input when backspace is pressed on an empty input
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  return (
    <View className="flex h-full">
      <View className="m-3 my-auto h-96">
        <View>
          <Text className="mx-auto mt-4 text-2xl text-cyan-900">
            OTP Verification
          </Text>
          <Text className="mx-auto mt-3 text-sky-800">
            Please enter the 6-digit number sent to your mobile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center h-28 w-full gap-1">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              className={`w-12 h-14 border-[1px] rounded-xl border-slate-400 text-center text-lg ${
                focusedIndex === index ? "border-b-4 border-black" : ""
              }`}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onFocus={() => handleFocus(index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
            />
          ))}
        </View>
        <View className="mx-auto ">
        <TouchableOpacity onPress={main} className="mt-10 h-12 w-40 rounded-xl bg-green-500"><Text className="mx-auto my-auto  text-white text-lg ">Verify Otp</Text></TouchableOpacity>

        <TouchableOpacity className="mx-auto mt-4 "><Text className="text-blue-500 text-md  underline">Resend otp </Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
