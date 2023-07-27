import styles from './styles.module.css'

const CabinetPageTitle = ({title, ...props}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>


        </div>
    )
}

export default CabinetPageTitle;