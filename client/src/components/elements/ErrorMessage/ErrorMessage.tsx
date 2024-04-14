import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface Props {
  message: string
}

const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <View className="flex flex-row items-center gap-2 pt-5">
      <View className="flex justify-center items-center">
        <Ionicons name="pizza" size={54} color="orange" />
      </View>
      <View>
        <Text className="text-center font-bold text-slate-500">{message}</Text>
      </View>
    </View>
  )
}

export default ErrorMessage
