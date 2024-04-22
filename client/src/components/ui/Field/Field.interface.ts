import { KeyboardTypeOptions, TextInputProps } from 'react-native'

export interface FieldProps extends TextInputProps {
  placeholder: string
  keyboardType?: KeyboardTypeOptions
  icon?: React.ReactElement
}
