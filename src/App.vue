<template>
  <BaseLayout />
  <router-view />
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  }
};
</script>