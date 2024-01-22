import { useQuery } from '@tanstack/react-query'

import { fetchSongs } from '../services/songsApi'

export function useSongs() {
  return useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs,
  })
}
