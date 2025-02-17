<template>
  <div class="app-layout">
    <BaseLayout />
    <main class="content">
      <router-view />
    </main>
    <FootLayout />
  </div>
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

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
}
</style>