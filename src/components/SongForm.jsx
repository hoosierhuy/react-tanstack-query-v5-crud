import { useState } from 'react'

const SongForm = ({ onSubmit, initialValue }) => {
  const [song, setSong] = useState({
    song: initialValue.song || '',
    album: initialValue.album || '',
  })

  const handleChangeInput = (evt) => {
    setSong({
      ...song,
      [evt.target.name]: evt.target.value,
    })
  }

  const createInputElement = (elementName) => (
    <div className="label">
      <label>{elementName}</label>
      <input
        onChange={handleChangeInput}
        type="text"
        name={elementName.toLowerCase()}
        value={song[elementName.toLowerCase()]}
      />
    </div>
  )

  const handleSubmit = (evt) => {
    evt.preventDefault()

    onSubmit(song)

    setSong({
      song: '',
      album: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {createInputElement('Song')}
      {createInputElement('Album')}
      <button type="submit" disabled={!song.song || !song.album}>
        Submit
      </button>
    </form>
  )
}

export default SongForm
