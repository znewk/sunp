import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";

const SideBar = () =>{
    return (
        <div className={styles.sideBar}>
            <div className={styles.topItems}>
                <Link href={'/'}>
                    <Image src={'/favicon.png'} alt={'logo'} width={54} height={52} className={styles.logo}/>
                </Link>
            </div>

            <div className={styles.bottomItems}>

            </div>
        </div>
    )
}

export default SideBar;