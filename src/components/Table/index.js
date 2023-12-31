import styles from './styes.module.css'
import NeftPricesTable from "./Tables/NeftPricesTable";

const Table = ({title, info, ...props}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.tableBody}>
                <table className={styles.table}>
                    {
                        title == "Цены на нефтепродукты" && <NeftPricesTable info={info}/>
                    }
                </table>
            </div>
        </div>
    )
}

export default Table;