import styles from "./Philosophy.module.css"
import Button from "../components/Button"

const elements = ["modern","responsive","performant","accesible","intuitive","modular","scalable","secure","reliable"];

export default function Philosophy () {
    return (
        <main className={styles.container}>
            <svg className="line">
                <line x1="0" x2="100%" strokeWidth="1px" y1="50%" y2="50%" />
            </svg>
            <h1 className="title">Philosoph<span>y</span></h1>
            <section>
                <article>
                    <div>
                        <p>Building</p>
                        <div className={styles.roller}>
                            {elements.map(el => <p className={styles.rollerElement} key={el}>{el}</p>)}
                        </div>
                    </div>
                    <p>web experiences with </p>
                    <div>
                        <p>clean code and</p><span className={styles.italic}> thoughtful design.</span>
                    </div>

                </article>
                <Button withText="work with me"/>
            </section>
        </main>
    )
}