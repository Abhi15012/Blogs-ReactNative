import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { useTheme } from '../../../../endpoints/ThemeContext';
import { useRouter } from 'expo-router';

export default function Data() {

  const [contacts, setContacts] = useState([]);
  const { isDarkMode } = useTheme();

  const fetchContacts = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderItem = ({ item }) => (
    <View  className={`${isDarkMode ? 'bg-purple-200' : 'bg-cyan-200'} pl-2 flex justify-center box-content  items-start mt-2 w-[90%] rounded-xl h-32  mx-auto  `}>
      <View className='flex flex-row justify-between '>
      <View className='flex flex-row justify-between bg-black w-12 h-12 rounded-full mt-4 mr-2' />
      <View className='flex '>
      <View className='flex flex-row'><Text>User name :</Text>
      <Text>{item.username}</Text></View>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
  
      <View  className=''><Text>Adress :</Text>
      <Text className='text-sm flex flex-row w-[90%] h-10 '> {item.address.street} , {item.address.city} ,{item.address.zipcode}</Text>
      
      </View>
      </View>
  
  
      </View>
      
  
  
    </View>
  )
  return (
    <View>
      <FlatList data={contacts} renderItem={renderItem} />  

    </View>
  )
}