import { MaterialIcons } from '@expo/vector-icons'
import { FC, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import IProduct from '@/types/product.interface'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { addTobasket, deleteFromBasket } from '@/store/basket/basket.slice'

interface PropsCard {
  product: IProduct
}

const ProductCard: FC<PropsCard> = ({ product }) => {
  const dispatch = useTypedDispatch()
  const { products } = useTypedSelector(state => state.basket)
  const { productsStopList } = useTypedSelector(state => state.stopList)

  const [activeProduct, setActiveProduct] = useState<boolean>(false)
  const [countProduct, setCountProduct] = useState(0)

  const [inStopList, setInStopList] = useState<boolean>(false)

  useEffect(() => {
    const activeProduct = products.find(elem => elem.id === product.id)
    if (activeProduct) {
      setCountProduct(activeProduct.count)
      setActiveProduct(true)
    } else setActiveProduct(false)
  }, [products, productsStopList])

  useEffect(() => {
    const isInStopList = productsStopList.some(item => item.product.id === product.id)
    setInStopList(isInStopList)
  }, [product.id, productsStopList])

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
          <View className="flex flex-row justify-between">
            <Text className="font-black text-lg mb-2">{product.name}</Text>
            {product.discount > 0 && (
              <View>
                <Text className="bg-orange-500 p-1 pr-2 pl-2 rounded-lg text-white text-xs font-bold">-{product.discount}%</Text>
              </View>
            )}
          </View>
          <Text className="font-bold text-xs mb-2 text-gray-500">{product.size}</Text>
          <Text className="text-justify text-gray-400 text-xs">{product.desc}</Text>
          <View className="mt-4 flex flex-row items-center justify-between">
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="font-bold text-xl">{product.price - (product.price * product.discount) / 100}</Text>
                <MaterialIcons name="currency-ruble" size={20} color="black" />
              </View>
              {product.discount > 0 && (
                <View className="flex flex-row items-center mt-1">
                  <Text className="text-md line-through text-gray-500">{product.price}</Text>
                  <MaterialIcons name="currency-ruble" size={15} color="gray" />
                </View>
              )}
            </View>
            {inStopList ? (
              <Text className="text-center text-gray-400">Нет в наличии</Text>
            ) : activeProduct ? (
              <View className="flex flex-row items-center bg-slate-300 p-1 rounded-xl">
                <TouchableOpacity
                  onPress={() => dispatch(deleteFromBasket(product))}
                  className="bg-green-500 pl-2 pr-2 rounded-lg mr-4"
                >
                  <Text className="text-white font-bold text-lg">-</Text>
                </TouchableOpacity>
                <Text className="font-bold text-lg text-white">{countProduct}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(addTobasket(product))}
                  className=" bg-green-500 pl-2 pr-2 rounded-lg ml-4"
                >
                  <Text className="text-white font-bold text-lg">+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => dispatch(addTobasket(product))}
                className="flex flex-row items-center justify-center bg-orange-600 w-20 rounded-xl"
              >
                <Text className="font-black text-white text-center text-2xl">+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCard
