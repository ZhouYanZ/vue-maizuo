## 思考之前 手动 webpack 的时候，下面这行有什么问题
import imgurl from './assets/images/a.png';

<img :src="imgurl" />

正常情况下，img src 地址写 相对路径是不会被 webpack 所理睬。

！！！！而在 vue 单文件组件中 template 里面 的 img src 路径会被 webpack 去处理。
<img src="../../assets/images/empty.png" alt />
