<template>
  <div>
    <!-- <component :is="componentSitemap" /> -->
    <h1>Sitemap New Routing for {{this.$route.params.cat}}</h1>

  </div>

</template>

<script>
export default {
  computed: {
    componentSitemap() {
      return () => import(`@/components/${this.$route.params.cat}/sitemap`);
    }
  }
};
</script>

<style>
</style>