import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { TextInput, View } from 'react-native'

const SearchBar: FC = () => {
  return (
    <View className="flex flex-row items-center border rounded-lg border-gray-200 p-2 ">
      <AntDesign name="search1" size={24} color="grey" />
      <TextInput className="flex-1 pl-2 text-gray-400" placeholder="Поиск" />
    </View>
  )
}

export default SearchBar
