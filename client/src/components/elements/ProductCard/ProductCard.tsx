import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, Text, View } from 'react-native'

interface Product {
  id: number
  name: string
  image: string
  desc: string
  salary: number
}

interface IProductCard extends Product {}

interface PropsCard {
  product: IProductCard
}

const ProductCard: FC<PropsCard> = ({ product }) => {
  return (
    <View className="rounded-xl border border-slate-200 mt-4">
      <View className="flex flex-row items-center gap-3 p-3 ">
        <View>
          <Image
            style={{ width: 120, height: 120 }}
            source={{
              uri: product.image
            }}
          />
        </View>
        <View>
          <Text className="font-bold text-lg mb-1">{product.name}</Text>
          <Text className="w-40 text-justify text-gray-400 text-xs">{product.desc}</Text>
          <View className="mt-3">
            <Text className="text-center">Переключатель</Text>
          </View>
          <View className="mt-3 flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Text className="font-bold text-xl">{product.salary}</Text>
              <MaterialIcons name="currency-ruble" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCard
