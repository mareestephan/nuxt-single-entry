<template>
    <div>
        <h1>SUPERBALIST Slug component</h1>
        <template v-for="(post, index) in posts.matched_products">
            <div class="w-100 my-1 d-sm-block d-none" v-if="(index % 4 == 0) && index != 0" :key="post.id">
                <template></template>
            </div>
            <div class="col-6 col-md one-quarter guide mt-0 pl-0 pl-sm-2 pr-1 pr-sm-2" :key="index">
                <a v-bind:href="post.product_link" aria-label="product link">
                    <div class="card product mb-0 mb-sm-2 ">
                        <div class="pb-2 px-2 mx-auto">
                            <img v-bind:src="post.product_image" class="card-img-top" aria-label="image for product" />
                        </div>
                        <div class="col-12 text-center text-sm-left product-text">

                            <p class="mb-0"></p>

                            <h6 class="mb-0">{{post.product_name}}</h6>
                            <div class="row mb-3 mt-2">
                                <div class="col-12 col-sm-7 price  guide">

                                    <h3 class="mx-auto mx-sm-0 mb-0">{{post.price}}</h3>

                                </div>

                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </template>
    </div>

</template>


  
<script>
import axios from "axios";
export default {
  async fetch() {
    const res = await axios.get(
      `http://35.190.35.153/system-api/pages-to-create/all-sale?slug=${
        this.$route.params.slug
      }`
    );
    this.posts = res.data.pages_to_create[0];
  },
  data() {
    return {
      posts: {}
    };
  },
  head() {
    return {
      title: this.posts.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.posts.meta_description
        }
      ]
    };
  }
};
</script>

<style>
</style>
