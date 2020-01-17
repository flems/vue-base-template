<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState({
      domain: state => state.options.domain,
    }),
  },
  methods: {
    ...mapActions([
      'getData',
    ]),
    ...mapMutations([
      'setData',
    ]),
  },
};
</script>

<style scoped lang="scss">

</style>
