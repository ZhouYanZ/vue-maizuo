# 正向代理 （中间层）

1. 百分百跨域
http://localhost:8080  -> http://m.maoyan.com

2. 浏览器
http://localhost:8080 -> http://localhost:8080/api

3. 后台
后台1
http://localhost:8080/api -> http://m.maoyan.com


http://localhost:8080 -> http://localhost:8080/api -> http://m.maoyan.com

在 vue 的代码中，vue.config.js 配置文件


http://localhost:8080/ajax/cinemaList?day=2019-07-02&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1562072911315&cityId=30

- > http://m.maoyan.com/ajax/cinemaList?day=2019-07-02&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1562072911315&cityId=30
