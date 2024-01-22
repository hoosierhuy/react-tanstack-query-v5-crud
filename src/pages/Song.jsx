// React Router v6
import { useNavigate, useParams } from 'react-router-dom'
// React Query
import { useQuery } from '@tanstack/react-query'
// Local files
import { fetchSong } from '../services/songsApi'

const Song = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    isPending,
    isError,
    data: hitSong,
    error,
  } = useQuery({
    queryKey: ['songs', id],
    queryFn: () => fetchSong(id),
  })

  if (isPending) return <span>Loading Taylor's song...</span>
  if (isError) return <span>`Error: ${error.message}`</span>

  return (
    <>
      <button onClick={() => navigate('/')} className="btn-general">
        Back Song List
      </button>
      <figure style={{ backgroundColor: '#FFCCCB', padding: '1rem' }}>
        <h2>Song: {hitSong?.song}</h2>
        <p>
          <strong>Album:</strong> {hitSong?.album}
        </p>
      </figure>
    </>
  )
}

export default Song
