import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

import BaseLayout from '@/components/layouts/BaseLayout'
import Field from '@/components/ui/Field/Field'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { logout } from '@/store/user/user.slice'

const Profile: FC = () => {
  const dispatch = useTypedDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { user } = useTypedSelector(state => state.user)

  return (
    <BaseLayout>
      <View className="mt-5">
        <Text className="font-bold text-lg ">{user?.firstName ? `Здравствуйте, ${user?.firstName}!` : 'Здравствуйте!'}</Text>
        <Text className="pt-2">{user?.phone}</Text>
      </View>

      <View className="mt-3">
        <Button title="История заказов" color={'#F77905'} onPress={() => navigation.navigate('История заказов')} />
      </View>

      <View>
        <Text className="font-bold text-lg mt-10">Личная информация</Text>
      </View>

      <View>
        <Field placeholder="Имя" value={user?.firstName} />
        <Field placeholder="Фамилия" value={user?.surname} />
        <Field placeholder="Отчество" value={user?.patronymic} />
        <Field placeholder="Адрес" value={user?.address} />
      </View>

      <View className="mt-10">
        <Button title="Сохранить" onPress={() => dispatch(logout())} />

        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text className="font-bold text-center text-red-600 text-lg mt-5">Выход</Text>
        </TouchableOpacity>
      </View>
    </BaseLayout>
  )
}

export default Profile
