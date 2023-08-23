// 引入组件
import About from './About.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Layout from './Layout.jsx'
import NotFound from './NotFound.jsx'

// 进行路由配置
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* 声明当前要用一个非hash模式的路由 */}
      <BrowserRouter>
        {/* <Link to="/home">首页</Link>
        <Link to="/about">关于</Link> */}
        <Routes>
          {/* <Route path="/home" element={<Home />}></Route>
          <Route path="/about/:id" element={<About />}></Route> */}
          <Route path="/" element={<Layout />}>
            {/* 定义二级路由 */}
            {/* <Route path="/home" element={<Home />}></Route> */}
            <Route index element={<Home />}></Route>
            <Route path="/about/:id" element={<About />}></Route>
          </Route>
          <Route path="/Login" element={<Login />}></Route>
          {/* 当所有路径都没匹配时渲染此路由 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//  安装react-router  npm i react-router-dom@6
// git clone https://gitee.com/react-course-series/react-router-start.git

// 两种Router: HashRouter(使用URL的哈希值实现)  BrowserRouter（使用h5的history.pushState实现）

// Link: 用于指定导航链接，完成路由跳转， 最终渲染为a标签

// Routes：提供一个路由出口，满足条件的路由组件会渲染到组件内部




// 默认二级路由
// 1. 给默认二级路由标记index属性
// 2. 把原本的路径path属性去掉
// 默认二级不再具有自己的路径