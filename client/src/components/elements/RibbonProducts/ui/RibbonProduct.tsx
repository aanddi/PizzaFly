import { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import ProductCard from '../../ProductCard/ProductCard'

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
  },
  {
    id: 4,
    name: 'Салями',
    desc: 'Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла',
    image: 'https://102922.selcdn.ru/nomenclature_images/87e4e3f2-263a-11ea-80f2-d8d38565926f/f99ceb2e-5502-48b0-9c7f-d18c9ef71f68.png',
    salary: 500
  }
]

const menu = [{ name: 'Пиццы' }, { name: 'Комбо' }, { name: 'Нипитки' }, { name: 'Соусы' }]

const RibbonProduct: FC = () => {
  const [active, setActive] = useState(menu[0])

  return (
    <ScrollView>
      <View className="flex-row justify-between items-center bg-slate-200 rounded-lg p-1.5 mt-5">
        {menu.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActive(menu[index])}
              className={`pr-4 pl-4 pt-2 pb-2 rounded-lg ${active.name == item.name ? 'bg-orange-500' : null}`}>
              <Text className={`font-bold text-center ${active.name == item.name ? 'text-white' : 'text-gray-400'}`}>{item.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </ScrollView>
  )
}

export default RibbonProduct
