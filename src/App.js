// 引入组件
import About from './About'
import Home from './Home.js'

// 进行路由配置
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* 声明当前要用一个非hash模式的路由 */}
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//  安装react-router  npm i react-router-dom@6
// git clone https://gitee.com/react-course-series/react-router-start.git