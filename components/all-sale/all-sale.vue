<template>
  <div>
    <!-- +++++++++++++++++++++++++ start HEADER + NAVBAR +++++++++++++++++++++++++  -->

    <HeaderAllSale />

    <!-- +++++++++++++++++++++++++ end HEADER + NAVBAR +++++++++++++++++++++++++  -->

    <div id="cta">
      <div class="notice text-center p-2 mt-3 mb-2 mb-sm-4" style="background-color:#ed778d !important ; margin-top: 0rem !important">
        <h5 class="mb-0 py-2 py-sm-0" style="text-transform: uppercase">Essential items will still be delivered during the lockdown period. However, all other orders may be delayed.</h5>
      </div>
    </div>
    <div class="container guide">

      <div class="text-center text-dark mt-3 mb-3 font-weight-bold" style="float:left; width:100%">
        <span class="display-4" style="font-size:1.4rem ; float:left">
          <small class="font-weight-bold">
            <a href="https://www.allsale.co.za/c/accessories/fa">CATEGORIES</a>
          </small>
          <!-- <small class="font-weight-bold"> &gt;
            <span class="">WATCHES</span>
          </small> -->
        </span>
      </div>

      <div style="clear:both"></div>
      <div id="rowGrid" class="row">

        <ProductsToggleAllSale />

        <div class="col-12 col-sm-9 guide px-0 overflow-hidden">
          <div class="row products mobile-products search-page">
            <div class="col-12 col-sm-5 guide mx-auto mx-sm-0 text-center text-sm-left mb-3 mb-sm-2 align-self-center">
              <b class="resultCount text-muted wide-spacing d-none d-sm-block ml-2">
                2890 CATEGORIES FOUND
              </b>
            </div>
            <div class="col-12 col-sm-5 guide mx-auto mx-sm-0 text-center text-sm-left mb-3 mb-sm-2 d-block d-sm-none">
              <b class="resultCount text-muted wide-spacing">
                2890 CATEGORIES FOUND
              </b>
            </div>
            <div class="col-10 offset-1 offset-sm-0 col-sm-7 guide search-products text-right d-flex flex-column flex-sm-row align-items-start justify-content-end mb-1">
              <div class="dropdown mt-0 mb-2 mr-sm-2 mx-auto ml-sm-0" id="sortOrder">
                <button class="btn btn-secondary dropdown-toggle dropdown-button mx-auto" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  NEW IN
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="fad.html#" data-sort="Savings">SAVINGS</a>
                  <a class="dropdown-item" href="fad.html#" data-sort="PriceLow">PRICE LOW TO HIGH</a>
                  <a class="dropdown-item" href="fad.html#" data-sort="PriceHigh">PRICE HIGH TO LOW</a>
                  <a class="dropdown-item" href="fad.html#" data-sort="Newest">NEW IN</a>
                </div>
              </div>
              <div class="dropdown mt-0 mb-2 d-none d-sm-flex" id="searchSize">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  VIEW 40
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="fad.html#" data-size="20">VIEW 20</a>
                  <a class="dropdown-item" href="fad.html#" data-size="40">VIEW 40</a>
                  <a class="dropdown-item" href="fad.html#" data-size="80">VIEW 80</a>
                </div>
              </div>
            </div>
            <div id="products4" class="col-12">
              <div class="row products mb-4 mt-4 mt-sm-0 mx-sm-0 px-3 px-sm-0">

                <!-- +++++++++++++++++++++++++ Start of Categories being displayed +++++++++++++++++++++++++  -->

                <template v-for="(post, index) in posts">
                  <div class="w-100 my-1 d-sm-block d-none" v-if="(index % 4 == 0) && index != 0" :key="post.id">

                    <div class="w-100 my-1 d-sm-block d-none"></div>
                  </div>
                  <div class="col-6 col-md one-quarter guide mt-0 pl-0 pl-sm-2 pr-1 pr-sm-2" :key="index">

                    <nuxt-link :to="`${$route.path}${post.slug}`">
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

                <!-- +++++++++++++++++++++++++ End of Categories being displayed +++++++++++++++++++++++++  -->

              </div>

              <input data-val="true" data-val-required="The TotalPages field is required." id="TotalPages" name="TotalPages" type="hidden" value="73" />
              <input data-val="true" data-val-required="The TotalProducts field is required." id="TotalProducts" name="TotalProducts" type="hidden" value="2890" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- +++++++++++++++ start FOOTER SECTION +++++++++++++++ -->
    <!-- <client-only> -->
    <FooterAllSale />
    <!-- </client-only> -->
    <!-- +++++++++++++++ end FOOTER SECTION +++++++++++++++ -->

  </div>

</template>
  
  


<script>
// AXIOS FOR FETCH

import axios from "axios";

// IMPORT API STRING

import API_route from "@/components/api";

// COMPONENTS

import FooterAllSale from "./allsale-components/FooterAllSale.vue";
import ProductsToggleAllSale from "./allsale-components/ProductsToggleAllSale.vue";
import HeaderAllSale from "./allsale-components/HeaderAllSale.vue";

export default {
  components: {
    FooterAllSale,
    ProductsToggleAllSale,
    HeaderAllSale
  },

  data() {
    return {
      posts: []
    };
  },

  async fetch() {
    console.log("Hierdie werk nie");
    const { data } = await axios.get(`${API_route.api}all-sale`);
    console.log("Hierdie werk, no data.");
    this.posts = data.pages_to_create;
  },

  head() {
    return {
      title: ["Categories | AllSale Club"],
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        },
        {
          src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
          integrity:
            "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
          crossorigin: "anonymous"
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
          integrity:
            "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
          crossorigin: "anonymous"
        }
      ],

      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://www.allsale.co.za/css/style.min.css?v=LDkaPGTJk5NNJxgncuo4SOMyLcaY43aPf3w148wok14"
        },
        {
          rel: "icon",
          type: "image",
          href: "https://www.allsale.co.za/favicon-32x32.png"
        }
      ]
    };
  }
};
</script>

