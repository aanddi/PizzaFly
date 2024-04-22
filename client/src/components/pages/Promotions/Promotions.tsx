import { useQuery } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import { FC } from 'react'
import { View } from 'react-native'

import PromotionCard from '@/components/elements/Promotion/PromotionCard/PromotionCard'
import BaseLayout from '@/components/layouts/BaseLayout'

import { PromotionsService } from '@/services/promotions.services'

const PromotionPage: FC = () => {
  const { data: promotions, isLoading: isLoadingPromotions } = useQuery({
    queryKey: ['promotions'],
    queryFn: async () => {
      const response = await PromotionsService.getPromotions()
      return response.data
    }
  })

  return (
    <BaseLayout>
      {isLoadingPromotions && (
        <View>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <View key={index} className="mt-5">
                <Skeleton h="150" flex="15" rounded="md"></Skeleton>
              </View>
            )
          })}
        </View>
      )}
      <View className="mb-5">
        {promotions?.map(promotion => {
          return <PromotionCard key={promotion.id} promotion={promotion} />
        })}
      </View>
    </BaseLayout>
  )
}

export default PromotionPage
