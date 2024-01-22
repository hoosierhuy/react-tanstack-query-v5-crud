import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteSong } from '../services/songsApi'

export function useDeleteSong() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteSong,

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      console.log('Song deleted successfully 🎉')
    },
  })
}
