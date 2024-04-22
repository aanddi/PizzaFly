import { FC } from 'react'

import Auth from '@/components/elements/User/Auth/Auth'
import Profile from '@/components/elements/User/Profile/Profile'
import BaseLayout from '@/components/layouts/BaseLayout'

import { useTypedSelector } from '@/hooks/redux'

const ProfilePage: FC = () => {
  const { isAuth } = useTypedSelector(state => state.user)
  return <BaseLayout>{isAuth ? <Profile /> : <Auth />}</BaseLayout>
}

export default ProfilePage
