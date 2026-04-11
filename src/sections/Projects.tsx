import styles from "./Projects.module.css"
import Card from "../components/Card"
import Button from "../components/Button"
import littlelemonPic from "../assets/little_lemon.png"
import musicPic from "../assets/tom_music.png"
import salonPic from "../assets/hair_day.png"
import { useEffect, useRef, useState } from "react"

const projects = [
    {title: "resto website",
    pic: littlelemonPic,
    alt: "Little Lemon's website"
},
{title: "music portfolio",
    pic: musicPic,
    alt: "Tom's music website"
},
{title: "boutique salon",
    pic: salonPic,
    alt: "Hair Day Boutique Salon's  website"
}
]

export default function Projects () {
const scrollerRef = useRef<HTMLElement>(null);
const [size, setSize] = useState(window.innerWidth);

const handleResize = () => {
    const clientWidth = window.innerWidth;
    if(clientWidth != size) {
        setSize(clientWidth);
    }
}

useEffect (()=>{
    if (scrollerRef.current) {
        const a = scrollerRef.current.scrollWidth / 2, b = window.innerWidth / 2;
        const offset = a - b;
        scrollerRef.current.scroll({left: offset, behavior:"instant"});

    }
},[size])
useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return ()=>window.removeEventListener("resize", handleResize)
}, [])

    return (
        <main className={styles.container}>
            <svg className="line">
                <line x1="0" x2="100%" strokeWidth="1px" y1="50%" y2="50%" />
            </svg>
            <h1 className="title">Proyect<span>s</span></h1>
            <section className={styles.cards} ref={scrollerRef}>
                {projects.map((project)=>
                    <Card project={project} key={project.title}/>
                )}
            </section>
            <Button withText="full portfolio"/>
        </main>
    )
}