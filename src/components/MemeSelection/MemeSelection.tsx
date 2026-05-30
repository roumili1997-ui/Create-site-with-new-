import styles from './MemeSelection.module.css'

const memes = [
  "/amime.jpg",
  "/dog.jpg",
  "/Gul.jpg",
  "/shrek.jpg",
  "/svampbob.jpg",
]

interface Props {
  onSelect: (meme: string) => void;
}

function MemeSelection({ onSelect }: Props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {memes.map((src) => (
        <img
          key={src}
          src={src}
          alt="meme"
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={() => onSelect(src)}
        />
      ))}
    </div>
  )
}

export default MemeSelection