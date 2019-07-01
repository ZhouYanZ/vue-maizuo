<template>
  <van-list v-model="filmLoading" @load="getFilmList" :finished="isFinished" finished-text="别拉了">
    <div class="page-home-films">
      <Banner class="banner" :list="bannerList" pagination loop />

      <van-tabs v-model="curFilmType" sticky>
        <van-tab title="正在热映">
          <Filmlist filmType="nowPlaying" :list="filmList" />
        </van-tab>
        <van-tab title="即将上映">
          <Filmlist filmType="comingSoon" :list="filmList" />
        </van-tab>
      </van-tabs>
    </div>
  </van-list>
</template>

<script>
import Banner from "@/components/Banner";
import Filmlist from "@/components/Filmlist";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "films",

  components: {
    Banner,
    Filmlist
  },

  computed: {
    ...mapState("film", ["bannerList", "filmList"]),
    ...mapGetters("film", ["isFinished"]),

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
    },

    filmLoading: {
      get() {
        return this.$store.state.film.filmLoading;
      },
      set(value) {
        this.$store.commit({
          type: "film/setFilmLoading",
          loading: value
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

    // onScroll() {
    //   console.log(123);
    // }
  },

  created() {
    this.getBannerList();
    // 由于使用了 van-list 默认它的 @load 事件会触发一次
    // this.getFilmList();
  }

  // mounted() {
  //   // window.addEventListener("scroll", () => {
  //   //   console.log(1);
  //   // });
  // }
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

