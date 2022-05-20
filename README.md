MyRoom
MyRoom展示子系统仓库

✨ Features
待补充．．．

🚀 Technologies
- ui库：semi
- react: 17.0.2
- React-router 6.3.0
- Axios
- Redux-toolkit


📦 Quick start
# Install dependencies.
npm install
# Run project in dev.
npm start
# Build project to production.
npm run build
# Run lint
pnpm run lint
Project directory
|-- room-client
    |-- App.js                  // 根组件
    |-- index.js                // 入口文件
    |-- api                     // 网路请求代码、工具类函数和相关配置
    |   |-- config.js
    |   |-- request.js
    |   |-- utils.js
    |-- application             // 入口文件
    |   |-- DemoPage            // 此为测试页面
    |   |   |-- index.js
    |   |-- Home                // 首页
    |   |   |-- index.js        // 函数组件
    |   |   |-- style.css       // 局部样式
    |   |-- HouseList
    |   |   |-- index.js
    |   |   |-- style.css
    |   |-- Login
    |   |   |-- index.js
    |   |   |-- style.css
    |   |-- Register
    |   |   |-- index.js
    |   |   |-- style.css
    |   |-- UserInfo
    |       |-- index.js
    |       |-- style.css
    |-- assets                  // 字体配置及全局样式
    |   |-- global-style.css
    |-- baseUI                  // 基础 UI 轮子
    |-- components              // 可复用的 UI 组件
    |-- routes                  // 路由配置文件
    |   |-- index.js
    |-- store                   // redux 相关文件
        |-- index.js
        |-- slice               // 定义切片的相关文件
            |-- demoSlice.js

⚽️ 项目分工
- 登录注册模块以及个人信息页面
- 房源卡片页面以及房源详情页面
- 低代码解析器（活动页）
