export interface InputNumberProps {
  validationName?: string;
  label?: string;
  id: string;
  modelValue?: string;
  invalid?: boolean;
  placeholder?: string;
  wrapperClass?: string;
  error?: string;
  helper?: string;
  useGrouping?: boolean;
  min?: number | null;
  max?: number | null;
  mode?: 'decimal' | 'currency';
  currency?: string;
  prefix?: string;
  suffix?: string;
  showButtons?: boolean;
  buttonLayout?: 'horizontal' | 'vertical' | 'stacked';
  step?: number;
  disabled?: boolean;
}
