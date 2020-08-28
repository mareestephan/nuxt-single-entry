<template>
  <div>
    <component :is="componentSlug" />
  </div>

</template>

<script>
export default {
  computed: {
    componentSlug() {
      return () => import(`@/components/${this.$route.params.cat}/slug`);
    }
  }
};
</script>

<style>
</style>
