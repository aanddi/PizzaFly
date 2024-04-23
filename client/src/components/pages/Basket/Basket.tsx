import { MaterialIcons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC, useState } from 'react'
import { Button, Text, View } from 'react-native'

import ProductCard from '@/components/elements/Product/ProductCard/ProductCard'
import ErrorMessage from '@/components/elements/app/ErrorMessage/ErrorMessage'
import BaseLayout from '@/components/layouts/BaseLayout'
import Field from '@/components/ui/Field/Field'

import { PromotionsService } from '@/services/promotions.services'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { addPromotions, resetDiscont } from '@/store/basket/basket.slice'

const BasketPage: FC = () => {
  const dispatch = useTypedDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const { products, length, price } = useTypedSelector(state => state.basket)
  const { user, isAuth } = useTypedSelector(state => state.user)

  const [promocodeField, setPromocodeField] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleOrder = async () => {
    const data = {
      price: price,
      promocode: promocodeField,
      idUser: user?.id
    }

    dispatch(resetDiscont())

    if (promocodeField) {
      setIsLoading(true)
      const response = await PromotionsService.checkPromocode(data)
      dispatch(addPromotions(response.data))
      setIsLoading(false)
    }

    navigation.navigate('Новый заказ')
  }

  return (
    <BaseLayout>
      {length === 0 && (
        <View className="flex items-center mt-10">
          <ErrorMessage message="Ой... Корзина пуста :(" />
        </View>
      )}

      {length > 0 && (
        <View>
          <View>
            {products?.map(product => {
              return <ProductCard key={product.id} product={product} />
            })}
          </View>
          <View className="border rounded-xl p-3 border-slate-200 mt-10 mb-10">
            <View className="flex flex-row justify-between items-center pt-3">
              <Text className="font-black text-lg">Итого</Text>
              <View className="flex flex-row items-center">
                <Text className="font-bold text-lg">{price}</Text>
                <MaterialIcons name="currency-ruble" size={20} color="black" />
              </View>
            </View>

            <Field placeholder="Введите промокод" onChangeText={setPromocodeField} />

            <View className="mt-5">
              {isLoading ? (
                <Text className="text-center mt-2 mb-2 text-green-500 font-bold">Загрузка...</Text>
              ) : (
                <Button title="Оформить заказ" color="#22C707" onPress={handleOrder} disabled={!isAuth} />
              )}
            </View>
            {!isAuth && <Text className="text-center text-red-500 mt-5">Авторизируйтесь в приложении, чтобы оформить заказ</Text>}
          </View>
        </View>
      )}
    </BaseLayout>
  )
}

export default BasketPage
