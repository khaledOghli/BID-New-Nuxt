export interface IProps {
  validationName?: string
  label?: string
  id: string
  modelValue?: any
  options: Array
  optionLabel?: string | ((option: any) => string)
  optionValue?: string | ((option: any) => any)
  optionDisabled?: string | ((option: any) => boolean)
  placeholder?: string
  invalid?: boolean
  wrapperClass?: string
  error?: string
  helper?: string
  disabled?: boolean
}
