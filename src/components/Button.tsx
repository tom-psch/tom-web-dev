import styles from "./Button.module.css"

export default function Button ({withText}: {withText:string}) {
    return (
        <button className={styles.mainButton}>
            {withText}
        </button>
    )
}