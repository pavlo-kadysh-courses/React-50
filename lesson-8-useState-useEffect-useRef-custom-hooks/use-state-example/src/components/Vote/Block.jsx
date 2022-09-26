import styles from './vote.module.scss';

const Block = ({title, children}) => {
    return (
        <div className={styles.block}>
            <h2 className={styles.heading}>{title}</h2>
            {children}
        </div>
    )
}

export default Block;