import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  color: string
  onPress: () => void
}

const ButtonCustom: FC<ButtonProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={`${color} p-1 rounded-lg font-bold text-white text-center text-lg`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCustom
