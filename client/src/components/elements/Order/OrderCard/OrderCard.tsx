import { MaterialIcons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import IOrder from '@/types/order.interface'

import { formatDate } from '@/utils/format/format-data'

interface Props {
  order: IOrder
}

const OrderCard: FC<Props> = ({ order }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <View className="rounded-xl border border-slate-200 mt-5">
      <View className="p-3">
        <View className="flex flex-row justify-between items-center">
          <Text className="font-bold text-lg">Заказ: №{order.id}</Text>
          <View className="flex flex-row items-center">
            <Text className="font-bold text-lg">{order.price - (order.price * order.discont) / 100}</Text>
            <MaterialIcons name="currency-ruble" size={18} color="black" />
          </View>
        </View>

        {order.status == 'Выполнен' ? (
          <Text className="mt-1 inline-flex text-green-500">{order.status}</Text>
        ) : (
          <Text className="mt-1 inline-flex text-red-500">{order.status}</Text>
        )}

        <Text className="text-slate-400 mt-2">{formatDate(order.createdAt)}</Text>
        <View className="mt-4">
          <View className="flex flex-row gap-1">
            <Text className="font-bold text-slate-500">Промокод:</Text>
            <Text className="text-slate-400">{order.promocode ? order.promocode : 'отсутствует'}</Text>
          </View>
          <View className="flex flex-row gap-1">
            <Text className="font-bold text-slate-500">Скидка:</Text>
            <Text className="text-slate-400">{order.discont ? order.discont + '%' : 'отсутствует'}</Text>
          </View>

          <View className="flex flex-row gap-1">
            <Text className="font-bold text-slate-500">Оплата:</Text>
            <Text className="text-slate-400">{order.payment}</Text>
          </View>
          {order.comment && (
            <View className="flex flex-row gap-1">
              <Text className="font-bold text-slate-500">Комментарий:</Text>
              <Text className="text-slate-400">{order.comment}</Text>
            </View>
          )}
        </View>
        <Text className="mt-3 text-slate-500 ">{order.address}</Text>
        <TouchableOpacity className="mt-4" onPress={() => navigation.navigate('Подробнее о заказе', { orderId: order.id })}>
          <Text className="p-2 bg-orange-400 rounded-lg text-white text-center font-bold">Подробнее</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderCard
