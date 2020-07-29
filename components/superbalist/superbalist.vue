  <template>
  <div>
    <h1>SUPERBALIST Component</h1>
    <template v-for="(post, index) in posts">
      <div class="w-100 my-1 d-sm-block d-none" v-if="(index % 4 == 0) && index != 0" :key="post.id">

        <div class="w-100 my-1 d-sm-block d-none"></div>
      </div>
      <div class="col-6 col-md one-quarter guide mt-0 pl-0 pl-sm-2 pr-1 pr-sm-2" :key="index">

        <nuxt-link :to="`${$route.path}/${post.slug}`">

          <a aria-label="product link">

            <div class="card product mb-0 mb-sm-2 ">

              <div class="col-12 text-center text-sm-left product-text">

                <p class="mb-0">{{post.brand}}</p>

                <h6 class="mb-0">{{post.meta_title}}</h6>

              </div>
            </div>
          </a>

        </nuxt-link>
      </div>
    </template>
  </div>
</template>
  
  


<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: []
    };
  },
  async fetch() {
    const { data } = await axios.get(
      `http://35.190.35.153/system-api/pages-to-create/all-sale`
    );
    // `todos` has to be declared in data()
    this.posts = data.pages_to_create;
    console.log(this.$route.params);
  },
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        }
      ]
    };
  }
  // props: {
  //   posts: {
  //     type: Object,
  //     default: null
  //   }
  // }
  // async fetch() {
  //   this.posts = await this.$http.$get(
  //     "http://35.190.35.153/system-api/pages-to-create/all-sale"
  //   );
  // },
  // data() {
  //   return {
  //     posts: []
  //   };
  // }
};
</script>

<style scoped src="@/static/all-sale/css/style.css">
</style>