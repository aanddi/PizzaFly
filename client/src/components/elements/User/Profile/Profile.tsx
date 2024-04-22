import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMutation } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

import BaseLayout from '@/components/layouts/BaseLayout'
import Field from '@/components/ui/Field/Field'

import { UsersService } from '@/services/users.services'

import { useTypedDispatch, useTypedSelector } from '@/hooks/redux'
import { auth, logout } from '@/store/user/user.slice'

const Profile: FC = () => {
  const dispatch = useTypedDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { user } = useTypedSelector(state => state.user)

  const [nameField, setNameField] = useState<string>('')
  const [surnameField, setSurnameField] = useState<string>('')
  const [patronymicField, setPatronymicField] = useState<string>('')
  const [addressField, setAddressField] = useState<string>('')

  const mutationUser = useMutation({
    mutationKey: ['editUser'],
    mutationFn: async (id: number | undefined) => {
      const data = {
        firstName: nameField,
        surname: surnameField,
        patronymic: patronymicField,
        address: addressField
      }
      const respone = await UsersService.editUser(id, data)
      dispatch(auth(respone.data))
      return respone.data
    }
  })

  return (
    <BaseLayout>
      <View className="mt-5">
        <Text className="font-black text-xl ">{user?.firstName ? `Здравствуйте, ${user?.firstName}!` : 'Здравствуйте!'}</Text>
        <Text className="pt-4 font-bold">{user?.phone}</Text>
      </View>

      <View className="mt-8">
        <Button title="История заказов" color={'#F77905'} onPress={() => navigation.navigate('История заказов')} />
      </View>

      <View>
        <Text className="font-bold text-lg mt-8">Личная информация</Text>
      </View>

      <View>
        <Field placeholder="Имя" value={user?.firstName} onChangeText={setNameField} />
        <Field placeholder="Фамилия" value={user?.surname} onChangeText={setSurnameField} />
        <Field placeholder="Отчество" value={user?.patronymic} onChangeText={setPatronymicField} />
        <Field placeholder="Адрес" value={user?.address} onChangeText={setAddressField} />
      </View>

      <View className="mt-10">
        <Button title="Сохранить" onPress={() => mutationUser.mutate(user?.id)} />

        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text className="font-bold text-center text-red-600 text-lg mt-5">Выход</Text>
        </TouchableOpacity>
      </View>
    </BaseLayout>
  )
}

export default Profile
