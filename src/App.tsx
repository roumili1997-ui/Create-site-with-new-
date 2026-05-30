import { useState } from 'react'
import styles from './App.module.css'
import WelcomePage from './components/WelcomePage/WelcomePage'
import MemeSelection from './components/MemeSelection/MemeSelection'
import ShowMeme from './components/ShowMeme/ShowMeme'

type View = "welcome" | "selection" | "editor"

function App() {
  const [view, setView] = useState<View>("welcome")
  const [selectedMeme, setSelectedMeme] = useState<string>("")
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [topSize, setTopSize] = useState(32)
  const [bottomSize, setBottomSize] = useState(32)

  function handleSelectMeme(src: string) {
    setSelectedMeme(src)
    setTopText("")
    setBottomText("")
    setView("editor")
  }

  return (
    <div className={styles.App}>
      {view === "welcome" && (
        <WelcomePage onStart={() => setView("selection")} />
      )}
      {view === "selection" && (
        <MemeSelection onSelect={handleSelectMeme} />
      )}
      {view === "editor" && (
        <ShowMeme
          memeSrc={selectedMeme}
          onBack={() => setView("selection")}
          topText={topText}
          bottomText={bottomText}
          topSize={topSize}
          bottomSize={bottomSize}
          onTopTextChange={setTopText}
          onBottomTextChange={setBottomText}
          onTopSizeChange={setTopSize}
          onBottomSizeChange={setBottomSize}
        />
      )}
    </div>
  )
}

export default App