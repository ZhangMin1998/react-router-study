// 引入组件
import About from './About.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'

// 进行路由配置
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* 声明当前要用一个非hash模式的路由 */}
      <BrowserRouter>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
          <Route path="/" element={<Login />}></Route>
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
