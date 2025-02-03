<template>
  <BaseLayout />
  <router-view />
  <FootLayout />

</template>

<script>
import BaseLayout from './components/BaseLayout.vue';
import FootLayout from './components/FootLayout.vue';

export default {
  components: {
    BaseLayout,
    FootLayout
  }
};
</script>