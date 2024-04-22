import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import { FC, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import ProductCard from '@/components/elements/Product/ProductCard/ProductCard'

import { CategoriesService } from '@/services/caterories.services'
import { ProductsService } from '@/services/products.services'

import ErrorMessage from '../../app/ErrorMessage/ErrorMessage'

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
    queryKey: ['products', categorieId],
    queryFn: async () => {
      const response = await ProductsService.getProducts(categorieId)
      return response.data
    }
  })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['products', categorieId] })
    queryClient.invalidateQueries({ queryKey: ['categories'] })
    queryClient.invalidateQueries({ queryKey: ['promotions'] })
  }, [])

  return (
    <ScrollView>
      {isLoadingCategories && (
        <View className="mt-5">
          <Skeleton h="10" flex="15" rounded="md" />
        </View>
      )}

      {categoriesData && (
        <View className="flex-row justify-between items-center bg-slate-200 rounded-lg p-1.5 mt-5">
          {categoriesData?.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setCategoriesId(item.id)
                  queryClient.invalidateQueries({ queryKey: ['products', categorieId] })
                }}
                className={`pr-4 pl-4 pt-2 pb-2 rounded-lg ${categorieId === item.id ? 'bg-orange-500' : null}`}
              >
                <Text className={`font-bold text-center ${categorieId === item.id && 'text-white'}`}>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}

      {!categoriesData && !isLoadingCategories && (
        <ErrorMessage message="Упс... Категории не найдены. Попробуйте перезагрузить страницу." />
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
        {products &&
          products?.map(product => {
            return <ProductCard key={product.id} product={product} />
          })}
      </View>

      <View>
        {!products && !isLoadingProducts && (
          <ErrorMessage message="Упс... Продукты не найдены. Попробуйте перезагрузить страницу." />
        )}
      </View>
    </ScrollView>
  )
}

export default RibbonProduct
