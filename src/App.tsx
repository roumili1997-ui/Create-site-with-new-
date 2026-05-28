import { useState } from 'react'
import styles from './App.module.css'
import SaveMeme from './Buttons/SaveMeme/SaveMeme';
import AddTextBtn from './Buttons/AddTextBtn/AddTextBtn';
import BackBtn from './Buttons/BackBtn/BackBtn';
import WelcomePage from './components/WelcomePage/WelcomePage';
import MemeSelection from './components/MemeSelection/MemeSelection';



function App() {
  const [texts, setTexts] = useState<{ value: string, size: number }[]>([]);


  const handleAddText = () => {
    setTexts(prev => [...prev, { value: 'New text', size: 24 }])
  }
  return (
    <div className={styles.App}> 
   
      {<SaveMeme />}
      {<AddTextBtn onClick={handleAddText}/>}
      {<BackBtn onClick={() => {}} />}
      {<WelcomePage onStart={() => {}} />}
      {<MemeSelection onSelect={() => {}} />}

    </div>
  )
}

export default App;
