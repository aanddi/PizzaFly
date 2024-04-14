import { FC } from 'react'

import CityActive from '@/components/elements/CityActive/CityActive'
import PromotionsSlider from '@/components/elements/PromotionsSlider/PromotionsSlider'
import RibbonProduct from '@/components/elements/RibbonProducts/RibbonProduct'
import BaseLayout from '@/components/layouts/BaseLayout'

const Home: FC = () => {
  return (
    <BaseLayout>
      <CityActive />
      <PromotionsSlider />
      <RibbonProduct />
    </BaseLayout>
  )
}

export default Home
