<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};

</script>

<style lang="scss">
  body {
    font-family: 'OpenSans', sans-serif;
    font-size: 16px;
    background: $gray;
  }
  * {
    box-sizing: border-box;
  }
</style>
