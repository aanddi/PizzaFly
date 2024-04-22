import { FC } from 'react'
import { TextInput, View } from 'react-native'

import { FieldProps } from './Field.interface'

const Field: FC<FieldProps> = ({ placeholder, keyboardType, icon, ...rest }) => {
  return (
    <View className="flex flex-row items-center border rounded-lg border-gray-200 p-2 bg-slate-200 mt-6">
      {icon && <View className="mr-3">{icon}</View>}
      <TextInput
        className="flex-1 pl-1 text-slate-600 font-bold tracking-widest"
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...rest}
      />
    </View>
  )
}

export default Field
