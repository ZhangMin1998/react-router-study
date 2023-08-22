import { useParams } from 'react-router-dom'

function About () {
  const params = useParams()
  return (
    <div>
      about --
      params: {params.id}
    </div>
  )
}

export default About