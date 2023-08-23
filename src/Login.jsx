import { useNavigate } from 'react-router-dom'

function Login () {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/home')
  }
  
  return (
    <div>
      Login
      <div>
      <button onClick={ goHome }>跳转到home</button>
      </div>
    </div>
  )
}

export default Login