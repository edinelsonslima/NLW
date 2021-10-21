import styles from './style.module.scss'

export function Loading() {
    return (
        <div className={styles.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
