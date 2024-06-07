<script setup lang="ts">
import type { DropdownChangeEvent, DropdownFilterEvent } from 'primevue/dropdown';
import { useField } from 'vee-validate';
import { computed, ref } from 'vue';
import type { IProps } from './Dropdown.d';

const props = withDefaults(defineProps<IProps>(), {
  validationName: '',
  label: '',
  id: '',
  modelValue: null,
  options: [] as any[],
  optionLabel: '',
  optionValue: '',
  optionDisabled: '',
  placeholder: '',
  invalid: false,
  wrapperClass: '',
  error: '',
  helper: '',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': (value: any) => void
  'change': (event: DropdownChangeEvent) => void
  'focus': (event: Event) => void
  'blur': (event: Event) => void
  'beforeShow': () => void
  'beforeHide': () => void
  'show': () => void
  'hide': () => void
  'filter': (event: DropdownFilterEvent) => void
  [key: string]: any
}>();

const showLabel = ref(!!props.label);
const dropdownRef = ref(null);
const { value, errorMessage } = useField(() => props.validationName);
const model = defineModel();
const modelComputed = computed({
  get: () => (props.validationName ? value.value : model.value),
  set: (val) => {
    if (props.validationName)
      value.value = val;
    else
      model.value = val;
    emit('update:modelValue', val);
  },
});

function handleChange(event: DropdownChangeEvent) {
  emit('change', event);
}

function handleFocus(event: Event) {
  emit('focus', event);
}

function handleBlur(event: Event) {
  emit('blur', event);
}

function handleBeforeShow() {
  emit('beforeShow');
}

function handleBeforeHide() {
  emit('beforeHide');
}

function handleShow() {
  emit('show');
}

function handleHide() {
  emit('hide');
}

function handleFilter(event: DropdownFilterEvent) {
  emit('filter', event);
}
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <label
      v-if="showLabel"
      :for="id"
    >{{ label }}</label>
    <PrimeDropdown
      :id="props.id"
      ref="dropdownRef"
      v-model="modelComputed"
      :options="props.options"
      :option-label="props.optionLabel"
      :option-value="props.optionValue"
      :option-disabled="props.optionDisabled"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :class="{ 'p-invalid': props.invalid }"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @before-show="handleBeforeShow"
      @before-hide="handleBeforeHide"
      @show="handleShow"
      @hide="handleHide"
      @filter="handleFilter"
    />
    <slot name="helper">
      <small
        v-if="props.helper"
        id="dropdown-help"
      >
        {{ props.helper }}
      </small>
    </slot>
    <CommonTransition>
      <small
        v-if="props.invalid"
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
