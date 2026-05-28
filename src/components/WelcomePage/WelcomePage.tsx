import styles from './WelcomePage.module.css'


interface Props {
    onStart: () => void;
}


function WelcomePage({ onStart }: Props) {
    return (
        <div> 
            <h1> 
                Välkommen till Meme-ratorn! Här kan du skapa dina egna memes genom att lägga till text på bilder. Klicka på "Add Text" för att börja skapa ditt meme. När du är klar, klicka på "Save Meme" för att spara ditt mästerverk. Ha kul och låt kreativiteten flöda!
            </h1>
            <button onClick={onStart}>Se olika memes</button>
        </div>
    )
}

export default WelcomePage;