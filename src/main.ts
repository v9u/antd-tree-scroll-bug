import { createApp } from 'vue'

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import * as Icons from "@ant-design/icons-vue";
// const icons: any = Icons;


import App from './App'

const app = createApp(App)
app.use(Antd)
app.mount('#app')

// for (const i in icons) {
//   app.component(i, icons[i]);
// }