// React Router v7
import { useNavigate } from 'react-router'
// React Query
// import {
//   useQuery,
//   useQueryClient /*, useMutation*/,
// } from '@tanstack/react-query'
// Local files
/** Comment IN the commented out codes if you don't want to use custom hooks */
// import { deleteSong, fetchSongs } from '../services/songsApi'
import AddSong from '../components/AddSong'
import { useDeleteSong } from '../custom-hooks/mutations'
import { useSongs } from '../custom-hooks/queries'

const SongList = () => {
  const navigate = useNavigate()
  // const queryClient = useQueryClient()

  /* Without custom useSongs hook **/
  // const {
  //   isPending,
  //   isError,
  //   data: songs,
  //   error,
  // } = useQuery({
  //   queryKey: ['songs'],
  //   queryFn: fetchSongs,
  // })

  const { isPending, isError, data: songs, error } = useSongs()

  /* Without custom useDelete hook */
  // const deleteSongMutation = useMutation({
  //   mutationFn: deleteSong,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['songs'] })
  //   },
  // })

  const deleteSongMutation = useDeleteSong()

  if (isPending) return <span>Loading Taylor's songs...</span>
  if (isError) return `Error: ${error.message}`

  const handleDelete = (id) => deleteSongMutation.mutate(id)

  return (
    <section>
      <AddSong />
      {songs?.map((hitsong) => (
        <div
          key={hitsong.id}
          style={{
            backgroundColor: '#FFCCCB',
            padding: '1rem',
            marginBottom: '1rem',
          }}
        >
          {/* Clickable h4 header to view the song and which of her album it came from. */}
          <h4
            className="song-heading"
            onClick={() => navigate(`/song/${hitsong.id}`)}
          >
            Song: {hitsong.song}
          </h4>
          {/* Edit song button */}
          <button
            onClick={() => navigate(`/song/${hitsong.id}/edit`)}
            className="btn-general"
          >
            Edit
          </button>
          {/* Delete song button */}
          <button
            onClick={() => handleDelete(hitsong.id)}
            className="btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  )
}

export default SongList
