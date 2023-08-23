import { useSearchParams, useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const id = params.get('id') // 关键

  const goAbout = () => {
    navigate('/about/888')
  }
  return (
    <div>
      this is home --
      id: {id}
      <button onClick={ goAbout }>跳转到about</button>
    </div>
  )
}

export default Home