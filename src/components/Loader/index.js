import styles from './styles.module.css'
import Image from "next/image";

const Loader = () => {
    return (
        <div>
            <Image className={styles.loader} src={'/loading.png'} alt={'loader'} height={64} width={64}/>
        </div>
    )
}

export default Loader;