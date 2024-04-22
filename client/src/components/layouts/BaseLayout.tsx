import { useQueryClient } from '@tanstack/react-query'
import { FC, PropsWithChildren, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useQueryClient()

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    queryClient.invalidateQueries({ queryKey: ['products'] })
    queryClient.invalidateQueries({ queryKey: ['categories'] })
    queryClient.invalidateQueries({ queryKey: ['promotions'] })
    setRefreshing(false)
  }
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      className="pl-3 pr-3 bg-whiteCustomized"
    >
      {children}
    </ScrollView>
  )
}

export default BaseLayout
