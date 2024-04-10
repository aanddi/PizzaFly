import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import ProductCard from '@/components/elements/ProductCard/ProductCard'
import { CategoriesService } from '@/services/caterories.services'
import { ProductsService } from '@/services/products.services'

const RibbonProduct: FC = () => {
  const queryClient = useQueryClient()

  const [categorieId, setCategoriesId] = useState<number>(1)

  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await CategoriesService.getAll()
      return response.data
    }
  })

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await ProductsService.getProducts(categorieId)
      return response.data
    }
  })

  return (
    <ScrollView>

      {isLoadingCategories && (
        <View className="mt-5">
          <Skeleton h="10" flex="15" rounded="md" />
        </View>
      )}

      {!isLoadingCategories && (
        <View className="flex-row justify-between items-center bg-slate-200 rounded-lg p-1.5 mt-5">
          {categoriesData?.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setCategoriesId(item.id)
                  queryClient.invalidateQueries({ queryKey: ['products'] })
                }}
                className={`pr-4 pl-4 pt-2 pb-2 rounded-lg ${categorieId === item.id ? 'bg-orange-500' : null}`}>
                <Text className={`font-bold text-center ${categorieId === item.id && 'text-white'}`}>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}

      {isLoadingProducts && (
        <View className="mt-5">
          {Array.from({ length: 5 }).map((el, index) => {
            return (
              <View key={index} className="p-1">
                <Skeleton h="150" flex="15" rounded="md" />
              </View>
            )
          })}
        </View>
      )}

      <View className="mb-4">
        {products?.map(product => {
          return <ProductCard key={product.id} product={product} />
        })}
      </View>

    </ScrollView>
  )
}

export default RibbonProduct
