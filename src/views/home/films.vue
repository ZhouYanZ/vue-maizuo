<template>
  <div class="page-home-films">
    <Banner class="banner" :list="bannerList" pagination loop />

    <van-tabs v-model="curFilmType" sticky>
      <van-tab title="正在热映">
        <Filmlist :list="filmList" />
      </van-tab>
      <van-tab title="即将上映">
        <Filmlist :list="filmList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Filmlist from "@/components/Filmlist";
import { mapState, mapActions } from "vuex";

export default {
  name: "films",

  components: {
    Banner,
    Filmlist
  },

  computed: {
    ...mapState("film", ["bannerList", "filmList"]),

    curFilmType: {
      get() {
        return this.$store.state.film.curFilmType;
      },

      set(value) {
        this.$store.commit({
          type: "film/setCurFilmType",
          filmType: value
        });
      }
    }
  },

  watch: {
    curFilmType(newVal, oldVal) {
      // 当 curFilmType 发生变化了，这是重新发送请求
      this.getFilmList();
    }
  },

  methods: {
    ...mapActions("film", ["getBannerList", "getFilmList"])
  },

  created() {
    this.getBannerList();
    this.getFilmList();
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

