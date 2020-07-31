const fetch = require('node-fetch')

export default {
  plugins: [
    '@/plugins/vue-placeholders.js'
  ],
  modules: [
    '@nuxt/http',
    'bootstrap-vue/nuxt'
  ],
  generate: {
    async routes() {
      const posts = await fetch('http://35.190.35.153/system-api/pages-to-create/all-sale')
      const routes = posts.map(post => `/posts/${post.id}`)

      return ['/'].concat(routes)
    }
  }

}