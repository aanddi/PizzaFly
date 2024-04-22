import { Feather, MaterialIcons } from '@expo/vector-icons'
import { useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'

import Field from '@/components/ui/Field/Field'

import { UsersService } from '@/services/users.services'

import { useTypedDispatch } from '@/hooks/redux'
import { auth } from '@/store/user/user.slice'
import { validPhone } from '@/utils/valid-field/phone'

const Auth = () => {
  /*
    Пользователь ввел номер => 
    нажимает кнопку получить код => 
    если номер валидный дается код => 
    если введенный код валидный делается запрос на сервер, полученные данные записывает в store
  */

  const dispatch = useTypedDispatch()
  const queryClient = useQueryClient()

  const [phoneField, setPhoneField] = useState<string>('')
  const [codeField, setCodeField] = useState<string>('')

  const [errorValidPhone, setErrorValidPhone] = useState<boolean>(false)
  const [errorValidCode, setErrorValidCode] = useState<boolean>(false)

  const [code, setCode] = useState<number>(2345)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handlePassport = () => {
    if (validPhone.test(phoneField)) return Alert.alert(`Ваш код: ${code}`)
    else setErrorValidPhone(true)
  }

  const handleAuth = async () => {
    if (code === +codeField) {
      setIsLoading(true)
      const response = await UsersService.getUserByPhone(phoneField)
      dispatch(auth(response.data))
      setIsLoading(false)
      return response.data
    } else {
      setErrorValidCode(true)
    }
  }

  return (
    <View className="mt-10">
      <Text className="text-center font-bold text-xl">Введите номер</Text>

      <Field
        icon={<Feather name="phone-call" size={18} color="gray" />}
        placeholder="+7 (000) 000-00-00"
        value={phoneField}
        onChangeText={setPhoneField}
        onChange={() => setErrorValidPhone(false)}
      />

      <Field
        icon={<MaterialIcons name="password" size={18} color="gray" />}
        className="flex-1 pl-5 text-slate-600 font-bold tracking-widest"
        placeholder="_ _ _ _"
        keyboardType="number-pad"
        value={codeField}
        onChangeText={setCodeField}
        onChange={() => setErrorValidCode(false)}
      />

      <View className="mt-20 mb-3">
        <Button title="Получить код" color="#3C3C3C" onPress={handlePassport} />
      </View>

      {isLoading ? (
        <View>
          <Text className="text-center mt-2 mb-2 text-orange-500">Загрузка...</Text>
        </View>
      ) : (
        <View className="mt-2 mb-3">
          <Button title="Войти" color="#F77905" onPress={handleAuth} />
        </View>
      )}

      {errorValidPhone && <Text className="text-center text-red-500 mb-2">Номер введен не правильно.</Text>}
      {errorValidCode && <Text className="text-center text-red-500 mb-2">Код введен не правильно.</Text>}

      <Text className="text-center text-xs text-slate-300">Авторизуясь, вы даете согласие на обработку персональных данных</Text>
    </View>
  )
}

export default Auth
