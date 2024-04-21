import { FC } from 'react'
import { Button } from 'react-native'

import Auth from '@/components/elements/Auth/Auth'
import BaseLayout from '@/components/layouts/BaseLayout'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { logout } from '@/store/user/user.slice'

const Profile: FC = () => {
  const dispatch = useTypedDispatch()
  const { user, isAuth } = useTypedSelector(state => state.user)

  console.log(isAuth)
  console.log('Юзер', user)

  return (
    <BaseLayout>
      {!isAuth && <Auth />}

      {isAuth && <Button title="Выход" onPress={() => dispatch(logout())} />}
    </BaseLayout>
  )
}

export default Profile
