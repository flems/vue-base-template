<template lang="html">
  <button
    :class="[
      className,
      'btn'
    ]"
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
    <svg class="btn__icon" v-if="arrow">
      <use xlink:href="#arrow-right"></use>
    </svg>
  </button>
</template>

<script>
import Arrow from '@/assets/img/svg/arrow-right.svg';

export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    className: {
      type: String,
      default: '',
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .btn {
    display: flex;
    align-items: center;
    &__icon {
      width: 16px;
      height: 16px;
    }
  }
</style>
