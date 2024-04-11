import { useQuery } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import { FC } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { PromotionsService } from '@/services/promotions.services'

const PromotionsSlider: FC = () => {
  const { data: promotions, isLoading: isLoadingPromotions } = useQuery({
    queryKey: ['promotions'],
    queryFn: async () => {
      const response = await PromotionsService.getPromotions()
      return response.data
    }
  })

  return (
    <>
      {isLoadingPromotions && <Skeleton h="32" flex="15" rounded="md" />}

      {promotions && promotions.length > 0 && !isLoadingPromotions ? (
        <>
          <ScrollView className="rounded-md" horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {promotions?.map((elem, index) => {
              return (
                <View key={index}>
                  <Image className="rounded-md" style={{ width: 335, height: 120 }} source={{ uri: elem.banner }} />
                </View>
              )
            })}
          </ScrollView>
          <View className="flex flex-row gap-2 items-center justify-center mt-1">
            {promotions?.map(_ => {
              return <View className="w-2 h-2 bg-gray rounded-lg"></View>
            })}
          </View>
        </>
      ) : (
        <Text>Акции не найдены</Text>
      )}
    </>
  )
}

export default PromotionsSlider
