import { useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

import ErrorMessage from '@/components/elements/app/ErrorMessage/ErrorMessage'
import BaseLayout from '@/components/layouts/BaseLayout'

import { OrdersService } from '@/services/order.services'

interface RouteParams {
  orderId: number
}

const DescOrder: FC = () => {
  const route = useRoute()
  const { orderId } = route.params as RouteParams // ?? костыль

  const { data: descs, isLoading } = useQuery({
    queryKey: ['orderDesc'],
    queryFn: async () => {
      const response = await OrdersService.ordersDesc(orderId)
      return response.data
    }
  })

  return (
    <BaseLayout>
      {descs && (
        <>
          <Text className="font-bold text-xl mt-4">Состав заказа: </Text>
          <View className="bg-slate-200 p-4 rounded-md mt-5">
            {descs.map(desc => {
              return (
                <View key={desc.id}>
                  <View className="flex flex-row justify-between">
                    <Text className="font-bold">{desc.product.name}</Text>
                    <Text>
                      {desc.count} шт. * {desc.price - (desc.price * desc.discount) / 100} ={' '}
                      {(desc.price - (desc.price * desc.discount) / 100) * desc.count} руб.
                    </Text>
                  </View>
                  <View className="border-t-2 border-t-slate-400 border-solid mt-3 mb-3"></View>
                </View>
              )
            })}
          </View>
        </>
      )}

      {isLoading && (
        <View>
          <View className="mt-4">
            <Skeleton h="40" flex="15" rounded="md" />
          </View>
        </View>
      )}

      <View>{!descs && !isLoading && <ErrorMessage message="Упс... Произошла ошибка." />}</View>
    </BaseLayout>
  )
}

export default DescOrder
