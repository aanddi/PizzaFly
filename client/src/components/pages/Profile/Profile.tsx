import Auth from '@/components/elements/Auth/Auth'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useTypedSelector } from '@/hooks/redux'
import { FC } from 'react'
import { Text } from 'react-native'

const Profile: FC = () => {
  const { user, isAuth } = useTypedSelector(state => state.user)
  console.log(isAuth)

  return (
    <BaseLayout>
      {!isAuth && <Auth />}
    </BaseLayout>
  )
}

export default Profile
