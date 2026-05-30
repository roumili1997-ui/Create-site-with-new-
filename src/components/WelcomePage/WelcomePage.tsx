import styles from './WelcomePage.module.css'

interface Props {
  onStart: () => void;
}

function WelcomePage({ onStart }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Välkommen till Meme-ratorn! Här kan du skapa dina egna memes genom att lägga till text på bilder. Klicka på "Se olika memes" för att börja. Ha kul!
      </h1>
      <button className={styles.button} onClick={onStart}>Se olika memes</button>
    </div>
  )
}

export default WelcomePage