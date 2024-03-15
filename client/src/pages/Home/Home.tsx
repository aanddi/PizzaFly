import { FC } from 'react'
import { Text, View } from 'react-native'

import BaseLayout from '@/app/layouts/BaseLayout'

import SearchBar from '@/shared/ui/SearchBar/SearchBar'
import Slider from '@/shared/ui/Slider/Slider'

import { data } from './slider.data'
import RibbonProduct from '@/widgets/ribbon-products/ui/RibbonProduct'

const Home: FC = () => {
  return (
    <BaseLayout>
      <View className="flex flex-row justify-between mt-3 mb-3 ">
        <Text className="font-bold">Симферополь</Text>
        <Text className="text-gray-400">10:00 - 23:00</Text>
      </View>
      <Slider data={data} />
      <View className="mt-5">
        <SearchBar />
      </View>
      <RibbonProduct />
    </BaseLayout>
  )
}

export default Home
