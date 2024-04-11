import { FC, useState } from 'react';
import { Text, View } from 'react-native';

const CitysList: FC = () => {
  return (
    <>
      <View className="flex flex-row justify-between mt-3 mb-3" >
        <Text className="font-bold">Симферополь</Text>
        <Text className="text-gray-400">10:00 - 23:00</Text>
      </View>
    </>
  )
}

export default CitysList
