<template>
  <div class="home">
    <UiButton :arrow="true">button</UiButton>
  </div>
</template>

<script>
import { UiButton } from '@/components/UI/index.js';

export default {
  name: 'home',
  components: {
    UiButton,
  },
};
</script>
