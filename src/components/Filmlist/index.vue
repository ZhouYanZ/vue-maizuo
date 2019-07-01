<template>
  <div class="mz-filmlist">
    <ul>
      <li class="item" v-for="item in list" :key="item.filmId">
        <router-link
          :to="{
            name: 'film',
            params: {
              filmId: item.filmId
            }
          }"
        >
          <div class="img">
            <img :src="item.poster" alt />
          </div>
          <div class="info">
            <div class="film-name info-col">
              <span class="name">{{ item.name }}</span>
              <span class="item">{{ item.filmType.name }}</span>
            </div>
            <div class="film-grade info-col" style="visibility: visible;">
              <span class="label">观众评分</span>
              <span class="grade">{{ item.grade }}</span>
            </div>
            <div class="film-actors info-col">
              <span class="label">主演：{{ item.actors | actorFormat }}</span>
            </div>
            <div class="film-detail info-col">
              <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
            </div>
          </div>
          <div class="buy" v-show="filmType==='nowPlaying'">购票</div>
          <div class="buy" v-show="filmType==='comingSoon'">预约</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilmList",

  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    filmType: String
  },

  methods: {
    /**
     * 格式化主演显示
     * @param {Array} actors 主演集合
     */
    // [{ name: 'zhagnsan', id: 123}, {name: 'lisi', id: 123}]
    // ['zhagnsan', 'lisi']
    // actorFormat(actors) {
    //   let tmp = actors.map(item => item.role);
    //   return tmp.join(" ");
    // }
  },

  // 过滤器 - 做数据格式化操作
  // 过滤器使用 {{ msg | fil1 }}
  filters: {
    // key - 过滤器名字
    // value - 函数 接收一个 value 值
    // key: value
    actorFormat(actors) {
      let tmp = actors.map(item => item.name);
      return tmp.join(" ");
    },

    fil1(value) {
      return value.split("")[0];
    },

    fil2(value, str1, str2) {
      console.log(value);
      console.log(str1);
      console.log(str2);
      return value;
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/common/mixins.scss";

.mz-filmlist {
  ul {
    margin-left: 15px;
    li {
      @include border-bottom;
      padding: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      box-sizing: content-box;

      > a {
        display: flex;
        align-items: center;
      }

      .img {
        flex-shrink: 0;
        width: 66px;
        height: 94px;
        background: rgb(249, 249, 249);
        img {
          width: 100%;
          border-radius: 2px;
        }
      }

      .info {
        flex: 1;
        padding: 0 10px;
        overflow: hidden;

        .info-col {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .film-name {
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
        }

        .film-grade {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
          }
        }

        .film-actors {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }

        .film-detail {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
      }

      .buy {
        @include border;
        flex-shrink: 0;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
      }
    }
  }
}
</style>
