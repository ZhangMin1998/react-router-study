import { Outlet } from 'react-router-dom'

function Layout () {
  
  return (
    <div>
      layout --- 
      {/* 二级路由的path等于 一级path + 二级path */}
      {/* <Link to="/home">首页</Link>
      <Link to="/about">关于</Link> */}
      <Outlet/>
    </div>
  )
}

export default Layout