import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export async function fetchSongs() {
  const response = await fetch(`${BASE_URL}/songs`)
  return response.json()
}
/** Comment IN the commented out codes if you don't want to use Axios */
// export async function fetchSong(id) {
//   const response = await fetch(`${BASE_URL}/songs/${id}`)
//   return response.json()
// }

export async function fetchSong(id) {
  return (await axiosInstance.get(`/songs/${id}`)).data
}

// export async function createSong(newSong) {
//   const response = await fetch(`${BASE_URL}/songs`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newSong),
//   })
//   return response.json()
// }

export async function createSong(newSong) {
  return (await axiosInstance.post('/songs', newSong)).data
}

export async function updateSong(updatedSong) {
  const response = await fetch(`${BASE_URL}/songs/${updatedSong.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedSong),
  })
  return response.json()
}

export async function deleteSong(id) {
  const response = await fetch(`${BASE_URL}/songs/${id}`, {
    method: 'DELETE',
  })
  return response.json()
}
