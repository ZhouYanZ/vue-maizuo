// vue 脚手架的配置文件

module.exports = {
  devServer: {
    // proxy: "写真实要请求地址"
    // proxy: "http://m.maoyan.com"
    proxy: {
      // key - 请求前缀
      // value - 请求配置项
      // key: value

      // http://localhost:8080/api/ajax/cinemaList ->
      // http://m.maoyan.com/api/ajax/cinemaList ->
      // http://m.maoyan.com/ajax/cinemaList
      "/api": {
        // target: '写真实要请求地址'
        target: "http://m.maoyan.com",
        // 路径重写
        pathRewrite: {
          "^/api": ""
        }
      }

      // '/api2': {
      //   target: "http://m.gouyan.com"
      // }
    }
  }
};
