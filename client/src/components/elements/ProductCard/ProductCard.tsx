import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, Text, View } from 'react-native'

import IProduct from '@/types/product.interface'

interface PropsCard {
  product: IProduct
}

const ProductCard: FC<PropsCard> = ({ product }) => {
  return (
    <View className="rounded-xl border border-slate-200 mt-4">
      <View className="flex flex-row items-center gap-3 p-3">
        <View>
          <Image
            style={{ width: 120, height: 120 }}
            source={{
              uri: product.image
            }}
          />
        </View>
        <View className="flex flex-1">
          <Text className="font-black text-lg mb-2">{product.name}</Text>
          <Text className="font-bold text-xs mb-2 text-gray-500">{product.size}</Text>
          <Text className="text-justify text-gray-400 text-xs">{product.desc}</Text>
          <View className="mt-4 flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Text className="font-bold text-xl">{product.price}</Text>
              <MaterialIcons name="currency-ruble" size={20} color="black" />
            </View>
            <View className="flex flex-row items-center justify-center bg-orange-600 w-20 rounded-xl">
              <Text className="font-black text-white text-center text-2xl">+</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCard
