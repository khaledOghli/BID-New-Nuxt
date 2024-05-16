<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { A11y, Navigation, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  definePageMeta({});

  function onSwiper(swiper) {
    // eslint-disable-next-line no-console
    console.log(swiper);
  }

  function onSlideChange() {
    // eslint-disable-next-line no-console
    console.log('slide change');
  }

  const modules = [Navigation, Pagination, A11y];
</script>

<template>
  <div>
    <PageHeader title="Swiper" subtitle="Swiper example" />

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      class="relative"
      @swiper="onSwiper"
      @slide-change="onSlideChange">
      <SwiperSlide v-for="i in 5" :key="i">
        <LandingQuote class="text-center" :title="`Quote ${i}`" description="Lorem ipsum" />
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slide-change="onSlideChange">
      <SwiperSlide v-for="i in 5" :key="i">
        <LandingQuote class="text-center" :title="`Quote ${i}`" description="Lorem ipsum" />
      </SwiperSlide>
    </Swiper>

    <div class="custom-swiper relative mt-10 bg-blue-50">
      <VButton
        size="lg"
        shadow
        class="swiper-btn-prev absolute -left-5 top-1/2 z-10 !h-10 w-10 -translate-y-1/2 transform rounded-full px-0 py-0">
        <Icon class="h-5 w-5" name="heroicons:chevron-left-20-solid" />
      </VButton>
      <VButton
        size="lg"
        shadow
        class="swiper-btn-next absolute -right-5 top-1/2 z-10 !h-10 w-10 -translate-y-1/2 transform rounded-full px-0 py-0">
        <Icon class="h-5 w-5" name="heroicons:chevron-right-20-solid" />
      </VButton>

      <Swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        }"
        :pagination="{
          clickable: true,
        }"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slide-change="onSlideChange">
        <SwiperSlide v-for="i in 5" :key="i">
          <LandingQuote class="text-center" :title="`Quote ${i}`" description="Lorem ipsum" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
