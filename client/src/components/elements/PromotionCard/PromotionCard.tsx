import { FC } from 'react'
import { Image, Text, View } from 'react-native'

import IPromotion from '@/types/promotion.interface'

interface PropsCard {
  promotion: IPromotion
}

const PromotionCard: FC<PropsCard> = ({ promotion }) => {
  return (
    <View className="border rounded-md border-slate-200 mt-5">
      <View>
        <Image
          style={{ height: 140, borderRadius: 5 }}
          source={{
            uri: promotion.banner
          }}
        />
      </View>
      <View className="mt-2 mb-2">
        <View className="pr-3 pl-3">
          <Text className="text-lg font-bold mb-2">{promotion.name}</Text>
          <Text className="text-slate-500">{promotion.desc}</Text>
          {promotion.promocode && <Text className="text-slate-600 font-bold mt-3">Промокод: {promotion.promocode}</Text>}
        </View>
      </View>
    </View>
  )
}

export default PromotionCard
