import { FC } from 'react'

import CitysList from '@/components/elements/CitysList/CitysList'
import PromotionsSlider from '@/components/elements/PromotionsSlider/PromotionsSlider'
import RibbonProduct from '@/components/elements/RibbonProducts/RibbonProduct'
import BaseLayout from '@/components/layouts/BaseLayout'

const Home: FC = () => {
  return (
    <BaseLayout>
      <CitysList />
      <PromotionsSlider />
      <RibbonProduct />
    </BaseLayout>
  )
}

export default Home
