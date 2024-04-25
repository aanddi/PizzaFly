import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import LottieView from 'lottie-react-native'
import { View } from 'native-base'
import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

const SuccessfulOrder: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <View className="flex flex-1 justify-center items-center justify-self-center">
      <View style={{ height: 300, aspectRatio: 1, justifyContent: 'center', alignSelf: 'center' }}>
        <LottieView style={{ flex: 1 }} source={require('../../../assets/lottie/delivery.json')} autoPlay loop />
      </View>
      <Text className="font-black text-2xl text-slate-700">Спасибо за заказ!</Text>
      <Text className="mt-2 text-slate-400">Ваш курьер уже в пути. Приятного аппетита.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Меню')}>
        <Text className="bg-orange-400 p-3 rounded-lg font-bold text-white mt-5">На главную страницу</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SuccessfulOrder
