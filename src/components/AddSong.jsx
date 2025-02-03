// React Query
import { useMutation, useQueryClient } from '@tanstack/react-query'
// Misc libraries
import { v4 as uuidv4 } from 'uuid'
// Local files
import { createSong } from '../services/songsApi'
import SongForm from './SongForm'

const AddSong = () => {
  const queryClient = useQueryClient()

  const createSongMutation = useMutation({
    mutationFn: createSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      console.info('Song created successfully')
    },
  })

  const handleAddSong = (song) => {
    createSongMutation.mutate({
      id: uuidv4(),
      ...song,
    })
  }

  return (
    <div>
      <h2>Add New Song</h2>
      <SongForm onSubmit={handleAddSong} initialValue={{}} />
    </div>
  )
}

export default AddSong
