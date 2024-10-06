

export const LoginFetch = async (url, data) => {
  try {
    console.log("fetchedData",data);
  
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      },


      body: JSON.stringify(data),
    })

    if(!response.ok){
      console.log("error at db")
    }
    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error 5001:', error);
  }
}

import { useColorScheme as _useColorScheme } from 'react-native';

export  function useColorScheme() {
  return _useColorScheme();
}