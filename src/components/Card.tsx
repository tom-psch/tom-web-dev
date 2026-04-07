import styles from "./Card.module.css"

export default function Card ({project}: {project:{title: string, pic: string}}) {
    return (
        <article className={styles.card}>
            <h3>{project.title}</h3>
            <img src={project.pic}></img>
        </article>
    )
}