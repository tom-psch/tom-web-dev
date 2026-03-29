import styles from "./Tech.module.css"
import bootstrap from "../assets/Bootstrap.png"
import css from "../assets/CSS3.png"
import html from "../assets/HTML5.png"
import js from "../assets/JavaScript.png"
import jest from "../assets/Jest.png"
import py from "../assets/Python.png"
import react from "../assets/React.png"
import ts from "../assets/TypeScript.png"
import vite from "../assets/Vite.png"
import { useEffect, useState } from "react"

const icons = [
    [css,"CSS icon","css"],
    [html,"HTML icon","html"],
    [py,"Python icon","python"],
    [js,"JavaScript icon","js"],
    [react,"React icon","react"],
    [ts,"TypeScript icon","ts"],
    [bootstrap,"Boostrap icon","bootstrap"],
    [jest,"Jest icon","jest"],
    [vite,"Vite icon","vite"],
]

export default function Tech () {
const [smallScreen, setSmallScreen] = useState(false)
const [resize, setResize] = useState(false)

useEffect(() => {
    if(window.innerWidth <= 700) {
        setSmallScreen(true);
    } else {
        setSmallScreen(false);
    }
},[resize])

useEffect(()=>{
    window.addEventListener("resize",handleResize);
    return ()=>window.removeEventListener("resize",handleResize);
},)
const handleResize = ()=>{
    setResize(!resize);
}
    return (
        <div className={styles.container}>
            <ul>
                {icons.map((icon) => <li key={icon[0]} className={styles[icon[2]]}><img src={icon[0]} alt={icon[1]}></img></li>)}
            </ul>
            {smallScreen && <ul>
                {icons.map((icon) => <li key={icon[0]} className={styles[icon[2]]}><img src={icon[0]} alt={icon[1]}></img></li>)}
                {icons.map((icon) => <li key={icon[0]} className={styles[icon[2]]}><img src={icon[0]} alt={icon[1]}></img></li>)}
            </ul>
            }
        </div>

    )
}