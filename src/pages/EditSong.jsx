// React Router v6
import { useNavigate, useParams } from 'react-router-dom'
// React Query
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// Local files
import { fetchSong, updateSong } from '../services/songsApi'
import SongForm from '../components/SongForm'

const EditSong = () => {
  const queryClient = useQueryClient()

  const navigate = useNavigate()
  const { id } = useParams()

  const {
    isPending,
    isError,
    data: song,
    error,
  } = useQuery({
    queryKey: ['songs', id],
    queryFn: () => fetchSong(id),
  })

  const updateSongMutation = useMutation({
    mutationFn: updateSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      navigate('/')
    },
  })

  if (isPending) return <span>Loading Taylor's songs...</span>
  if (isError) return `Error: ${error.message}`

  const handleSubmit = (updatedSong) => {
    updateSongMutation.mutate({ id, ...updatedSong })
  }

  return (
    <div>
      <SongForm onSubmit={handleSubmit} initialValue={song} />
    </div>
  )
}

export default EditSong
