import { MaterialIcons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'

import ProductCard from '@/components/elements/Product/ProductCard/ProductCard'
import ErrorMessage from '@/components/elements/app/ErrorMessage/ErrorMessage'
import BaseLayout from '@/components/layouts/BaseLayout'
import Field from '@/components/ui/Field/Field'

import { useTypedSelector } from '@/hooks/redux'

const BasketPage: FC = () => {
  const { products, length, price } = useTypedSelector(state => state.basket)
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
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
            <View>
              <Field placeholder="Промокод" />
              <View className="mt-2">
                <Button title="Применить" color="#373636" />
              </View>
            </View>
            <View className="mt-10">
              <Button title="Оформить заказ" color="#22C707" onPress={() => navigation.navigate('Новый заказ')} />
            </View>
          </View>
        </View>
      )}
    </BaseLayout>
  )
}

export default BasketPage
