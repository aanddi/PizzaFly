import { FC } from 'react'

import CityActive from '@/components/elements/User/CityActive/CityActive'
import RibbonProduct from '@/components/elements/Product/RibbonProducts/RibbonProduct'
import PromotionsSlider from '@/components/elements/Promotion/PromotionsSlider/PromotionsSlider'
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
