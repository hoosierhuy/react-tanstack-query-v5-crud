// React Router v6
import { Route, Routes } from 'react-router-dom'
// Local files
import EditSong from './pages/EditSong'
import Song from './pages/Song'
import SongList from './pages/SongList'

function App() {
  return (
    <>
      <h1>The Taylor Swift Apocalypse</h1>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/song/:id/edit" element={<EditSong />} />
      </Routes>
    </>
  )
}

export default App
