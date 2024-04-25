import { useNavigation } from '@react-navigation/native'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Skeleton } from 'native-base'
import { FC, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import ErrorMessage from '@/components/elements/app/ErrorMessage/ErrorMessage'
import BaseLayout from '@/components/layouts/BaseLayout'

import { CitysServices } from '@/services/citys.serveces'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { change } from '@/store/city/city.slice'

const CitysList: FC = () => {
  const queryClient = useQueryClient()
  const dispatch = useTypedDispatch()
  const navigation = useNavigation()

  const { data: citys, isLoading: isLoadingCitys } = useQuery({
    queryKey: ['citys'],
    queryFn: async () => {
      const response = await CitysServices.getAll()
      return response.data
    }
  })

  const handleChangeCity = (name: string) => {
    dispatch(change(name))
    queryClient.invalidateQueries({ queryKey: ['stopList', name] })
    navigation.goBack()
  }

  return (
    <BaseLayout>
      <View className="mt-5">
        {isLoadingCitys &&
          Array.from({ length: 5 }).map((_, index) => {
            return (
              <View key={index} className="p-2">
                <Skeleton h="12" flex="15" rounded="md" />
              </View>
            )
          })}
      </View>

      <View className="mt-3">
        {citys &&
          citys.map(el => {
            return (
              <TouchableOpacity key={el.id} onPress={() => handleChangeCity(el.name)}>
                <Text className="font-black text-slate-600 p-5 text-center text-2xl">{el.name}</Text>
              </TouchableOpacity>
            )
          })}

        {!citys && !isLoadingCitys && <ErrorMessage message="Упс... Города не найдены." />}
      </View>
    </BaseLayout>
  )
}

export default CitysList
