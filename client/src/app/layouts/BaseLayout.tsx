import { FC, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ScrollView className="pl-3 pr-3 bg-white">{children}</ScrollView>
}

export default BaseLayout
