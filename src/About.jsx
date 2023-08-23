import { useParams } from 'react-router-dom'

function About () {
  const params = useParams()
  return (
    <div>
      this is about --
      params: {params.id}
    </div>
  )
}

export default About