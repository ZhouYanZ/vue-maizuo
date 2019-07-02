let arr1 = [
  {
    name: '北京',
    pinyin: 'beijing'
  },
  {
    name: '鞍山',
    pinyin: 'anshan'
  },
  {
    name: '安庆',
    pinyin: 'anqing'
  },
  {
    name: '保定',
    pinyin: 'baoding'
  }
]

let result = [];  // 最后的结果

arr1.forEach(city => {
  // 1. 取出 当前 item 的拼音首字母
  let py = city.pinyin.charAt(0).toUpperCase()

  // 2. 判断当前这个 py 是否已经追加到 result 中过。
  // 如果存在，那么 reuslt[index].list.push(city)
  // 不存在，就走下面的做法。
  let index = result.findIndex(item => item.py === py);
  if (index > -1) {
    // 找到了
    result[index].list.push(city);
  } else {
    // 没找到，
    // item 做成 { py: py, list: [item] } 这个效果
    let obj = {
      py: py,
      list: [city]
    }
    // 将 obj push 到 result 中
    result.push(obj);
  }
  result.sort()

  // 2. 将这个 item 做成 { py: py, list: [item] } 这个效果
  // let obj = {
  //   py: py,
  //   list: [city]
  // }
  // // 3. 将 obj push 到 result 中
  // result.push(obj);
})









<!-- 目前的数据结构 -->
[
  {
    name: '北京',
    pinyin: 'beijing'
  },
  {
    name: '鞍山',
    pinyin: 'anshan'
  },
  {
    name: '安庆',
    pinyin: 'anqing'
  },
  {
    name: '保定',
    pinyin: 'baoding'
  },
  ...
]

<!-- 期望的数据结构 -->
[
  {
    py: 'A',
    list: [
      {
        name: '鞍山'
      }
    ]
  },
  {
    py: 'B',
    list: [
      {
        name: '北京'
      },
      {
        name: '保定'
      }
    ]
  }
]
