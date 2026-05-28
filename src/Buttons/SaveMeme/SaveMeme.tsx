import html2canvas from "html2canvas";

function saveMeme() {
  const element = document.querySelector(".meme") as HTMLDivElement;
  html2canvas(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

export default function SaveMeme() {
  return (
    <button onClick={saveMeme}>Ladda ner meme</button>
  );
}