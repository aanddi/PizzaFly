import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CityActive: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <>
      <View className="flex flex-row justify-between mt-3 mb-3">
        <TouchableOpacity onPress={() => navigation.navigate('Города')}>
          <Text className="font-bold">Симферополь</Text>
        </TouchableOpacity>
        <Text className="text-gray-400">10:00 - 23:00</Text>
      </View>
    </>
  )
}

export default CityActive
