import { AntDesign, Feather } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMutation } from '@tanstack/react-query'
import LottieView from 'lottie-react-native'
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
  const { city } = useTypedSelector(state => state.city)

  const [nameField, setNameField] = useState(user?.firstName)
  const [surnameField, setSurnameField] = useState(user?.surname)
  const [patronymicField, setPatronymicField] = useState(user?.patronymic)
  const [addressField, setAddressField] = useState(user?.address)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mutationUser = useMutation({
    mutationKey: ['editUser'],
    mutationFn: async (id: number | undefined) => {
      const data = {
        firstName: nameField,
        surname: surnameField,
        patronymic: patronymicField,
        address: addressField
      }
      setIsLoading(true)
      const respone = await UsersService.editUser(id, data)
      dispatch(auth(respone.data))
      setIsLoading(false)
      return respone.data
    }
  })

  return (
    <BaseLayout>
      <View style={{ height: 200, aspectRatio: 1, justifyContent: 'center', alignSelf: 'center'}} >
        <LottieView style={{ flex: 1 }} source={require('../../../../assets/lottie/profile.json')} autoPlay loop />
      </View>
      <View className=" bg-slate-800 p-2 rounded-md">
        <Text className=" text-center font-black text-xl text-white">
          {user?.firstName ? `Здравствуйте, ${user?.firstName}!` : 'Здравствуйте!'}
        </Text>
      </View>

      <View className="flex justify-between flex-row items-center mt-5">
        <Text className="font-bold">{user?.phone}</Text>
        <TouchableOpacity className="flex flex-row gap-1 items-center" onPress={() => navigation.navigate('Города')}>
          <Feather name="map-pin" size={15} color="gray" />
          <Text className="font-bold">{city}</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5">
        <Button title="История заказов" color={'#F77905'} onPress={() => navigation.navigate('История заказов')} />
      </View>

      <View>
        <Text className="font-bold text-lg mt-8">Личная информация</Text>
      </View>

      <View>
        <Field
          icon={<AntDesign name="user" size={18} color="gray" />}
          placeholder="Имя"
          value={nameField}
          onChangeText={setNameField}
        />
        <Field
          icon={<AntDesign name="user" size={18} color="gray" />}
          placeholder="Фамилия"
          value={surnameField}
          onChangeText={setSurnameField}
        />
        <Field
          icon={<AntDesign name="user" size={18} color="gray" />}
          placeholder="Отчество"
          value={patronymicField}
          onChangeText={setPatronymicField}
        />
        <Field
          icon={<Feather name="map-pin" size={18} color="gray" />}
          placeholder="Адрес"
          value={addressField}
          onChangeText={setAddressField}
        />
      </View>

      <View className="mt-10">
        {isLoading ? (
          <View>
            <Text className="text-center mt-2 mb-2 text-blue-500 font-bold">Загрузка...</Text>
          </View>
        ) : (
          <Button title="Сохранить" onPress={() => mutationUser.mutate(user?.id)} />
        )}

        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text className="font-bold text-center text-red-600 text-lg mt-5">Выход</Text>
        </TouchableOpacity>
      </View>
    </BaseLayout>
  )
}

export default Profile
