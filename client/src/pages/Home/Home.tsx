import { FC } from 'react'
import { Text, View } from 'react-native'

import BaseLayout from '@/app/layouts/BaseLayout'

import Quantity from '@/features/count-buttons/ui/Quantity'

import ProductCard from '@/entities/Product/ui/ProductCard/ProductCard'

import SearchBar from '@/shared/ui/SearchBar/SearchBar'
import Slider from '@/shared/ui/Slider/Slider'

import { data } from './slider.data'

const products = [
  {
    id: 1,
    name: 'Салями',
    desc: 'Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла',
    image: 'https://102922.selcdn.ru/nomenclature_images/87e4e3f2-263a-11ea-80f2-d8d38565926f/f99ceb2e-5502-48b0-9c7f-d18c9ef71f68.png',
    salary: 500
  },
  {
    id: 2,
    name: 'Том ям',
    desc: 'сыр моцарелла, мидии, креветки, кальмары, помидоры черри, шампиньоны, соус Том Ям',
    image: 'https://102922.selcdn.ru/nomenclature_images/87e4e3f2-263a-11ea-80f2-d8d38565926f/2ba55593-7708-4477-a46a-cdd5706f195c.png',
    salary: 300
  },
  {
    id: 3,
    name: '6 сыров',
    desc: 'сыр моцарелла, сыр чеддер, сыр дор блю, сыр пармезан, сыр бельпер «паприка» и «4 перца», сыр рикотта, сливочно-сырный соус',
    image: 'https://102922.selcdn.ru/nomenclature_images/87e4e3f2-263a-11ea-80f2-d8d38565926f/a2a0bfb9-2fc5-4283-9ff6-a17a1e22dbc6.png',
    salary: 400
  }
]

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

      {products.map(product => {
        return <ProductCard key={product.id} product={product} renderQuantityButton={() => <Quantity />} />
      })}
    </BaseLayout>
  )
}

export default Home
