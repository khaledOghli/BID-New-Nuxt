<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useField } from 'vee-validate';
  import type { IProps } from './InputText.d';

  const props = withDefaults(defineProps<IProps>(), {
    validationName: '',
    label: '',
    id: '',
    modelValue: '',
    invalid: false,
    placeholder: '',
    wrapperClass: '',
    error: '',
    helper: '',
    disabled: false,
  });

  const showLabel = ref(!!props.label);
  const inputRef = ref(null);
  const { value, errorMessage } = useField(() => props.validationName);
  const model = defineModel();
  const modelComputed = computed({
    get: () => (props.validationName ? value.value : model.value),
    set: (val) => {
      if (props.validationName) {
        value.value = val;
      } else {
        model.value = val;
      }
    },
  });
</script>

<template>
  <div :class="wrapperClass ? wrapperClass : 'dm-field'">
    <label v-if="showLabel" :for="id">{{ label }}</label>
    <PrimeInputText
      ref="inputRef"
      v-model="modelComputed"
      :invalid="props.invalid"
      :id="props.id"
      :placeholder="props.placeholder"
      :disabled="props.disabled" />
    <slot name="helper">
      <small v-if="props.helper" id="username-help">
        Enter your username to reset your password.
      </small>
    </slot>
    <Common-Transition>
      <small v-if="invalid" class="p-error flex items-center gap-1 text-sm">
        <Icon name="material-symbols:error-outline-rounded" />
        {{ props.error ? props.error : errorMessage }}
      </small>
    </Common-Transition>
  </div>
</template>

<style scoped>
  .dm-field {
    @apply relative flex flex-col;
  }
</style>
