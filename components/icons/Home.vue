<script setup lang="ts">
import { defineExpose, ref } from 'vue';
import json from '~/assets/json/icons/Home.json';

const lottieRef = ref();

function playAnimation() {
  lottieRef.value?.playAnimation();
}

function stopAnimation() {
  lottieRef.value?.stopAnimation();
}

defineExpose({ playAnimation, stopAnimation });
</script>

<template>
  <CommonLottie
    ref="lottieRef"
    :loop="true"
    :json="json"
  />
</template>
