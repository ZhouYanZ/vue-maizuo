<template>
  <div class="page-home-cinemas">
    <h1>影院列表页</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cinemas",

  created() {
    axios
      // .get(
      //   "/ajax/cinemaList?day=2019-07-02&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1562072911315&cityId=30"
      // )
      .get(
        "/api/ajax/cinemaList?day=2019-07-02&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1562072911315&cityId=30"
      )
      .then(response => {
        let res = response.data;
        console.log(res);
      });
  }
};
</script>
