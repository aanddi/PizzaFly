import LottieView from 'lottie-react-native'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface Props {
  message: string
}

const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <View className="flex items-center gap-2 pt-5">
      <View className="flex justify-center items-center">
        {/* <Ionicons name="pizza" size={54} color="orange" /> */}
        <View style={{ height: 200, aspectRatio: 1 }}>
          <LottieView style={{ flex: 1 }} source={require('../../../../assets/lottie/error.json')} autoPlay loop />
        </View>
      </View>
      <View>
        <Text className="text-center  font-bold text-slate-500">{message}</Text>
      </View>
    </View>
  )
}

export default ErrorMessage
