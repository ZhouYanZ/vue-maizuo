<template>
  <div class="page-home-films">
    <Banner class="banner" :list="bannerList" pagination loop />
    <h1>电影列表页</h1>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import { mapState, mapActions } from "vuex";

export default {
  name: "films",

  components: {
    Banner
  },

  computed: {
    ...mapState("film", ["bannerList"])
  },

  methods: {
    ...mapActions("film", ["getBannerList"])
  },

  created() {
    this.getBannerList();
  }
};
</script>

<style lang="scss">
.page-home-films {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>

