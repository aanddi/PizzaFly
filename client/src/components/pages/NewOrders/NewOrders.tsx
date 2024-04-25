import { MaterialIcons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMutation } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

import BaseLayout from '@/components/layouts/BaseLayout'
import ButtonCustom from '@/components/ui/Button/ButtonCustom'
import Field from '@/components/ui/Field/Field'

import { OrdersService } from '@/services/order.services'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { resetBasket } from '@/store/basket/basket.slice'

const NewOrders: FC = () => {
  const dispatch = useTypedDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const { products, price, promocode, discont } = useTypedSelector(state => state.basket)
  const { user } = useTypedSelector(state => state.user)

  const [resultPrice, setResultPrice] = useState<number | null>(null)

  const [adressOrder, setAdressOrder] = useState<string | undefined>(user?.address)
  const [payment, setPayment] = useState('Наличными')
  const [comment, setComment] = useState('')

  const [errorAdress, setErrorAdress] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (discont) setResultPrice(price - (price * discont) / 100)
    else setResultPrice(price)
  }, [])

  const orderMutation = useMutation({
    mutationKey: ['newOrder'],
    mutationFn: async () => {
      const data = {
        userId: user?.id,
        price: resultPrice,
        payment: payment,
        comment: comment,
        promocode: promocode,
        discont: discont,
        products: products,
        address: adressOrder
      }
      setIsLoading(true)
      const response = await OrdersService.newOrder(data)
      setIsLoading(false)
      if (response.status === 200) {
        dispatch(resetBasket())
        navigation.navigate('SuccessfulOrder')
      }
      return response.data
    }
  })

  const handleOrders = async () => {
    if (!adressOrder || adressOrder.length < 5) setErrorAdress(true)
    else {
      orderMutation.mutate()
    }
  }

  return (
    <BaseLayout>
      <View className="mt-4">
        <Text className="font-bold text-xl">Информация о заказе</Text>

        {promocode ? (
          <View className="mt-2">
            <View className="flex flex-row gap-1">
              <Text className="font-bold text-slate-500">Промокод:</Text>
              <Text className="text-slate-400">{promocode}</Text>
            </View>
            <View className="flex flex-row gap-1">
              <Text className="font-bold text-slate-500">Скидка:</Text>
              <Text className="text-slate-400">{discont}%</Text>
            </View>
          </View>
        ) : (
          <View className="mt-2">
            <Text className="font-bold text-slate-500">Промокод отсутствует.</Text>
            <Text className="text-gray-300 text-xs mt-1">
              Eсли вы вводили промокод, то проверьте условия скидки или правильность ввода промокода.
            </Text>
          </View>
        )}

        <Field
          placeholder="Доставка на адрес"
          onChangeText={setAdressOrder}
          value={adressOrder}
          onChange={() => setErrorAdress(false)}
        />
        <Field placeholder="Комментарий к заказу" multiline={true} numberOfLines={4} onChangeText={setComment} value={comment} />

        <View className="flex mt-1">
          <View className="flex flex-row items-center">
            <Text>Наличными</Text>
            <RadioButton
              value="Наличными"
              status={payment === 'Наличными' ? 'checked' : 'unchecked'}
              onPress={() => setPayment('Наличными')}
            />
          </View>
          <View className="flex flex-row items-center">
            <Text>Карта</Text>
            <RadioButton
              value="Карта"
              status={payment === 'Карта' ? 'checked' : 'unchecked'}
              onPress={() => setPayment('Карта')}
            />
          </View>
        </View>
      </View>

      <View className="mt-3">
        <Text className="font-bold text-xl mb-1">Заказ:</Text>
        <View className="bg-slate-200 p-4 rounded-md">
          {products.map(product => {
            return (
              <View key={product.id}>
                <View className="flex flex-row justify-between">
                  <Text className="font-bold">{product.name}</Text>
                  <Text>
                    {product.count} шт. * {product.price - (product.price * product.discount) / 100} ={' '}
                    {(product.price - (product.price * product.discount) / 100) * product.count} руб.
                  </Text>
                </View>
                <View className="border-t-2 border-t-slate-400 border-solid mt-3 mb-3"></View>
              </View>
            )
          })}
        </View>

        {promocode && (
          <View className="mt-2">
            <Text className="text-right text-slate-400">Цена без скидки: {price} рублей</Text>
            <Text className="text-right text-slate-400">Цена с промокодом: {resultPrice} рублей</Text>
          </View>
        )}
      </View>

      <View className="mt-3 mb-10">
        <View className="flex flex-row justify-between items-center pt-3">
          <Text className="font-black text-lg">К оплате</Text>
          <View className="flex flex-row items-center">
            <Text className="font-bold text-lg">{resultPrice}</Text>
            <MaterialIcons name="currency-ruble" size={20} color="black" />
          </View>
        </View>
        <View className="mt-3 mb-3">
          {isLoading ? (
            <View>
              <Text className="text-center mt-2 mb-2 text-orange-500">Загрузка...</Text>
            </View>
          ) : (
            <ButtonCustom title="Сделать заказ" color="orange" onPress={handleOrders} />
          )}
        </View>
        {errorAdress && <Text className="text-center text-red-500">Адрес не введен или введен не корректно.</Text>}
      </View>
    </BaseLayout>
  )
}

export default NewOrders
