<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, ref } from 'vue';
import type { InputNumberProps } from './InputNumber.d';

const props = withDefaults(defineProps<InputNumberProps>(), {
  validationName: '',
  label: '',
  id: '',
  modelValue: '',
  invalid: false,
  placeholder: '',
  wrapperClass: '',
  error: '',
  helper: '',
  useGrouping: false,
  min: null,
  max: null,
  mode: 'decimal',
  currency: 'USD',
  prefix: '',
  suffix: '',
  showButtons: false,
  buttonLayout: 'stacked',
  step: 1,
  disabled: false,
});
const showLabel = ref(!!props.label);
const inputRef = ref(null);
const { value, errorMessage } = useField(() => props.validationName);
const model = defineModel();
const modelComputed = computed({
  get: () => (props.validationName ? value.value : model.value),
  set: (val) => {
    if (props.validationName)
      value.value = val;
    else
      model.value = val;
  },
});
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <label
      v-if="showLabel"
      :for="id"
    >{{ label }}</label>
    <PrimeInputNumber
      :id="id"
      ref="inputRef"
      v-model="modelComputed"
      :invalid="invalid"
      :use-grouping="props.useGrouping"
      :placeholder="props.placeholder"
      :min="props.min"
      :max="props.max"
      :mode="props.mode"
      :currency="props.currency"
      :prefix="props.prefix"
      :suffix="props.suffix"
      :show-buttons="props.showButtons"
      :button-layout="props.buttonLayout"
      :step="props.step"
      :disabled="props.disabled"
    />
    <slot name="helper">
      <small
        v-if="props.helper"
        id="username-help"
      >
        {{ props.helper }}
      </small>
    </slot>
    <CommonTransition>
      <small
        v-if="invalid"
        class="p-error flex items-center gap-1 text-sm"
      >
        <Icon name="material-symbols:error-outline-rounded" />
        {{ props.error ? props.error : errorMessage }}
      </small>
    </CommonTransition>
  </div>
</template>

<style scoped>
  .dm-field {
  @apply relative flex flex-col;
}
</style>
