import styles from '../../styes.module.css'
import classnames from "classnames";

const NeftPricesTable = ({info, ...props}) => {
    return (
        <>
            <thead>
                <tr>
                    <th className={styles.columnTitle}>Наименование НП</th>
                    <th className={styles.columnTitle}>Льготная цена</th>
                    <th className={styles.columnTitle}>Предельная цена</th>
                    <th className={styles.columnTitle}>Дата обновления</th>
                    <th className={styles.columnTitle}>Действия</th>
                </tr>
            </thead>

            <tr>
                <td colSpan={5}>
                    <div className={styles.hr}></div>
                </td>
            </tr>

            <tbody>
            {
                info.map((item)=>{
                    return(
                        <tr>
                            <td className={styles.td}>{item.name}</td>
                            <td className={styles.td}>{item.preferentialPrice}</td>
                            <td className={styles.td}>{item.marginalPrice}</td>
                            <td className={styles.td}>{item.updateDate}</td>
                            <td className={classnames(styles.td, styles.changeBtn)}>&#9998; Изменить</td>
                        </tr>
                    )
                })
            }
            </tbody>

        </>
    )
}

export default NeftPricesTable;