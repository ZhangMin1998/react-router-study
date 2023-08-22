// 导入useNavigate函数
import { useNavigate } from 'react-router-dom'

function Login () {
  // 执行函数
  const navigate = useNavigate()
  const goHome = () => {
    // navigate('/home')
    navigate('/home', {replace: true}) // 注: 如果在跳转时不想添加历史记录，可以添加额外参数replace 为true
  }
  // function goHome () {
  //   navigate('/home')
  // }
  return (
    <>
      <div>Login</div>
      <div>
        <button onClick={ goHome }>跳转到home</button>
      </div>
    </>
  )
}

export default Login


// 编程式导航
// 实现步骤：
// 1. 导入一个 useNavigate 钩子函数
// 2. 执行 useNavigate 函数 得到 跳转函数
// 3. 在事件中执行跳转函数完成路由跳转