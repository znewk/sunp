import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import classnames from "classnames";
import {useResize} from "../../modules/use-resize";

const SideBar = ({role, ...props}) =>{
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

    const [openSideBar, setOpenSideBar] = useState(false)

    const [showLeaves, setShowLeaves] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showSignOut, setShowSignOut] = useState(false)

    useEffect(()=>{

    }, [])

    return (
        <>
            <motion.div layout style={{x: openSideBar ? '1200%' : 0}} className={styles.mobileMenu}>
                <Image src={openSideBar ? "/SideBar/left-arrow.png" : "/SideBar/menu.png"} alt={'menu'} className={styles.menuImg} height={18} width={18}
                       onClick={()=>setOpenSideBar(!openSideBar)}
                />
            </motion.div>


            <motion.div layout  style={{width: isScreenSm ? '5%' : openSideBar ? "50%" : 0}} className={styles.sideBar} >
                <div className={styles.topItems}>
                    <Link href={'/'} className={styles.logoBody}>
                        <Image src={'/favicon.png'} alt={'logo'} width={54} height={52} className={styles.logo}/>
                    </Link>

                    <nav className={styles.items}>
                        <Link href={'/cabinet'} className={styles.itemBodyLink} >
                            <div onClick={()=>setOpenSideBar(!openSideBar)} className={styles.itemBody} onMouseEnter={()=>{setShowLeaves(true)}} onMouseLeave={()=> setShowLeaves(false)} >
                                <div className={styles.itemLine}></div>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.item}>
                                    <g opacity="0.4" clip-path="url(#clip0_1_11252)">
                                        <path d="M3.99998 0H6.99998C9.20911 0 11 1.79086 11 3.99998V6.99998C11 9.20911 9.20911 11 6.99998 11H3.99998C1.79086 11 0 9.20916 0 6.99998V3.99998C0 1.79086 1.79086 0 3.99998 0Z" fill="#2E2E2E"/>
                                        <path d="M17 0H20C22.2091 0 24 1.79086 24 3.99998V6.99998C24 9.20911 22.2091 11 20 11H17C14.7909 11 13 9.20911 13 6.99998V3.99998C13 1.79086 14.7908 0 17 0Z" fill="#2E2E2E"/>
                                        <path d="M3.99998 13H6.99998C9.20911 13 11 14.7909 11 17V20C11 22.2091 9.20911 24 6.99998 24H3.99998C1.79086 24 0 22.2092 0 20V17C0 14.7909 1.79086 13 3.99998 13Z" fill="#2E2E2E"/>
                                        <path d="M17 13H20C22.2091 13 24 14.7909 24 17V20C24 22.2092 22.2091 24 20 24H17C14.7909 24 13 22.2092 13 20V17C13 14.7909 14.7908 13 17 13Z" fill="#2E2E2E"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_11252">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span className={styles.mobileComment}>Отпуски</span>


                                <AnimatePresence>
                                    {showLeaves ? (
                                        <motion.div className={styles.itemMessage} initial={{x: -10, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: -10, opacity: 0}}>
                                            Отпуски
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>


                            </div>
                        </Link>

                    </nav>
                </div>

                <div className={styles.bottomItems}>
                    <Link href={'/cabinet/profile'} className={styles.itemBodyLink} >
                        <div onClick={()=>setOpenSideBar(!openSideBar)} className={styles.itemBody} onMouseEnter={()=>{setShowProfile(true)}} onMouseLeave={()=> setShowProfile(false)}>

                            <div className={styles.itemLine}></div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.item}>
                                <g opacity="0.4">
                                    <path d="M1.60682 18C2.43398 19.4356 4.26834 19.9288 5.70393 19.1017C5.70491 19.1011 5.70585 19.1005 5.70684 19.1L6.15182 18.843C6.99182 19.5616 7.95735 20.119 8.9998 20.487V21C8.9998 22.6568 10.343 24 11.9998 24C13.6566 24 14.9998 22.6568 14.9998 21V20.487C16.0424 20.1184 17.008 19.5604 17.8478 18.841L18.2948 19.099C19.7307 19.9274 21.5664 19.4349 22.3948 17.999C23.2232 16.563 22.7308 14.7274 21.2948 13.899L20.8508 13.643C21.0507 12.5554 21.0507 11.4405 20.8508 10.353L21.2948 10.097C22.7307 9.26855 23.2232 7.43292 22.3948 5.99695C21.5664 4.56103 19.7308 4.06852 18.2948 4.89694L17.8498 5.15395C17.009 4.43616 16.0428 3.87984 14.9998 3.513V3C14.9998 1.34316 13.6566 0 11.9998 0C10.343 0 8.9998 1.34316 8.9998 3V3.513C7.95721 3.88158 6.99163 4.43958 6.15182 5.15902L5.70482 4.90003C4.26885 4.07156 2.43323 4.56408 1.6048 6C0.776383 7.43592 1.26885 9.27159 2.70482 10.1L3.14882 10.356C2.94895 11.4435 2.94895 12.5584 3.14882 13.646L2.70482 13.902C1.27284 14.7326 0.781961 16.5647 1.60682 18ZM11.9998 8.00002C14.2089 8.00002 15.9998 9.79088 15.9998 12C15.9998 14.2091 14.2089 16 11.9998 16C9.79068 16 7.99982 14.2091 7.99982 12C7.99982 9.79088 9.79068 8.00002 11.9998 8.00002Z" fill="black"/>
                                </g>
                            </svg>
                            <span className={styles.mobileComment}>Профиль</span>

                            <AnimatePresence>
                                {showProfile ? (
                                    <motion.div className={styles.itemMessage} initial={{x: -10, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: -10, opacity: 0}}>
                                        Профиль
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>


                        </div>
                    </Link>

                    <Link href={'/cabinet/profile'} className={styles.itemBodyLink} >
                        <div onClick={()=>setOpenSideBar(!openSideBar)} className={classnames(styles.itemBody, styles.itemOtherBody)} onMouseEnter={()=>{setShowSignOut(true)}}  onMouseLeave={()=> setShowSignOut(false)}>
                            <div className={styles.itemLine}></div>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.itemOther}>
                                <g opacity="0.4">
                                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 17L21 12L16 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 12H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                            <span className={styles.mobileComment}>Выход</span>

                            <AnimatePresence>
                                {showSignOut ? (
                                    <motion.div className={styles.itemMessage} initial={{x: -10, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: -10, opacity: 0}}>
                                        Выход
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>


                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default SideBar;