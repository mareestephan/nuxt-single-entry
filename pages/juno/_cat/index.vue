<template>
  <div>
    <component :is="componentShop" />
  </div>

</template>

<script>
export default {
  computed: {
    componentShop() {
      return () =>
        import(`@/components/${this.$route.params.cat}/${
          this.$route.params.cat
        }`);
    }
  }
};
</script>

