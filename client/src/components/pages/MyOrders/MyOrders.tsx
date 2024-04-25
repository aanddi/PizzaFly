import { useQuery } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import { FC } from 'react'
import { View } from 'react-native'

import OrderCard from '@/components/elements/Order/OrderCard/OrderCard'
import ErrorMessage from '@/components/elements/app/ErrorMessage/ErrorMessage'
import BaseLayout from '@/components/layouts/BaseLayout'

import { OrdersService } from '@/services/order.services'

import { useTypedSelector } from '@/hooks/redux'

const MyOrders: FC = () => {
  const { user } = useTypedSelector(state => state.user)

  const { data: orders, isLoading } = useQuery({
    queryKey: ['myOrders'],
    queryFn: async () => {
      const response = await OrdersService.myOrders(user?.id)
      return response.data
    }
  })

  return (
    <BaseLayout>
      {isLoading && (
        <View>
          {Array.from({ length: 5 }).map((el, index) => {
            return (
              <View key={index} className="mt-4">
                <Skeleton h="150" flex="15" rounded="md" />
              </View>
            )
          })}
        </View>
      )}

      <View className="mb-5">
        {orders?.map(order => {
          return <OrderCard key={order.id} order={order} />
        })}
      </View>

      <View>{orders?.length === 0 && !isLoading && <ErrorMessage message="Вы еще не офрмили ни один заказ (" />}</View>
    </BaseLayout>
  )
}

export default MyOrders
