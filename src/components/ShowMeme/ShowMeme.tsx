import { useRef } from "react"
import html2canvas from "html2canvas"
import styles from "./ShowMeme.module.css"
import BackBtn from "../../Buttons/BackBtn/BackBtn"

interface Props {
  memeSrc: string;
  onBack: () => void;
  topText: string;
  bottomText: string;
  topSize: number;
  bottomSize: number;
  onTopTextChange: (val: string) => void;
  onBottomTextChange: (val: string) => void;
  onTopSizeChange: (val: number) => void;
  onBottomSizeChange: (val: number) => void;
}

function ShowMeme({
  memeSrc, onBack,
  topText, bottomText,
  topSize, bottomSize,
  onTopTextChange, onBottomTextChange,
  onTopSizeChange, onBottomSizeChange
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

   function saveMeme() {
    if (!containerRef.current || !memeSrc) return
    html2canvas(containerRef.current).then((canvas) => {
      const link = document.createElement("a")
      link.download = "meme.png"
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <div>
      <div ref={containerRef} className={`meme ${styles.memeContainer}`}>
        <img src={memeSrc} alt="vald meme" style={{ display: 'block', maxWidth: '500px' }} />
        <span style={{
          position: 'absolute', top: '10px', left: '50%',
          transform: 'translateX(-50%)',
          fontSize: topSize, color: 'white',
          textShadow: '2px 2px 4px black',
          fontWeight: 'bold', whiteSpace: 'nowrap'
        }}>
          {topText}
        </span>
        <span style={{
          position: 'absolute', bottom: '10px', left: '50%',
          transform: 'translateX(-50%)',
          fontSize: bottomSize, color: 'white',
          textShadow: '2px 2px 4px black',
          fontWeight: 'bold', whiteSpace: 'nowrap'
        }}>
          {bottomText}
        </span>
      </div>

      <div className={styles.controls}>
        <div>
          <label>Top text:</label>
          <input value={topText} onChange={(e) => onTopTextChange(e.target.value)} placeholder="Skriv top-text..." />
          <button onClick={() => onTopTextChange("")}>Rensa</button>
          <input type="range" min={2} max={200} value={topSize} onChange={(e) => onTopSizeChange(Number(e.target.value))} />
          <span>{topSize}px</span>
        </div>
        <div>
          <label>Bottom text:</label>
          <input value={bottomText} onChange={(e) => onBottomTextChange(e.target.value)} placeholder="Skriv bottom-text..." />
          <button onClick={() => onBottomTextChange("")}>Rensa</button>
          <input type="range" min={2} max={200} value={bottomSize} onChange={(e) => onBottomSizeChange(Number(e.target.value))} />
          <span>{bottomSize}px</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <BackBtn onClick={onBack} />
        <button onClick={saveMeme}>Ladda ner meme</button>
      </div>
    </div>
  )
}

export default ShowMeme