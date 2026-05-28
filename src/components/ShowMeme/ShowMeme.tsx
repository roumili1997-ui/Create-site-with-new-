import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import styles from "./ShowMeme.module.css";


interface TextItem {
    value: string;
    size: number;
    x: number;
    y: number;

}

interface Props {
    memeSrc: string;
    onBack: () => void;
}

function ShowMeme({ memeSrc, onBack }: Props) {
    const [texts, setTexts] = useState<TextItem[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);


