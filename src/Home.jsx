import { useSearchParams } from 'react-router-dom'

function Home () {
  const [params] = useSearchParams()
  const id = params.get('id') // 关键
  return (
    <div>
      home --
      id: {id}
    </div>
  )
}

export default Home