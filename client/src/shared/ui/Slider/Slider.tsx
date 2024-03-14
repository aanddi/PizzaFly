import { FC } from 'react'
import { Image, ScrollView, View } from 'react-native'

import { ISliderProps } from './Slider.interface'

const Slider: FC<ISliderProps> = ({ data }) => {
  return (
    <View>
      <ScrollView className="rounded-md" horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {data.map((elem, index) => {
          return <Image key={index} className="rounded-md" style={{ width: 335, height: 120 }} source={{ uri: elem.source }} />
        })}
      </ScrollView>
      <View className="flex flex-row gap-2 items-center justify-center mt-1">
        {data.map(_ => {
          return <View className="w-2 h-2 bg-gray rounded-lg"></View>
        })}
      </View>
    </View>
  )
}

export default Slider
