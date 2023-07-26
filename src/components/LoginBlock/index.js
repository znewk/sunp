import styles from "./styles.module.css"
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import classnames from "classnames"
import {motion} from "framer-motion"

const LoginBlock = () => {
    const slides = [
        {
            title: 'МОДУЛЬ ОТПУСКА НЕФТЕПРОДУКТОВ НА АЗС 1'
        },
        {
            title: 'МОДУЛЬ ОТЧЕТОВ ПО ОТПУСКАМ НА АЗС'
        },
        {
            title: 'МОДУЛЬ ОТПУСКА НЕФТЕПРОДУКТОВ НА АЗС 3'
        },
    ]
    const [currentSlideId, setCurrentSlideId] = useState(0)

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const sliderTitle = useRef()

    const [showPass, setShowPass] = useState(false)

    const [showTitle, setShowTitle] = useState(true)

    useEffect(()=>{

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2 className={styles.title}>ИНФОРМАЦИОННАЯ СИСТЕМА УЧЕТА ОТДЕЛЬНЫХ ВИДОВ НЕФТЕПРОДУКТОВ</h2>

                <div className={styles.inputsBody}>
                    <input placeholder={"Логин"} type="text" className={styles.input} onChange={event => setLogin(event.target.value)}/>

                    <div className={styles.eyeInput}>
                        <input placeholder={"Пароль"} type={showPass ? 'text' : 'password'} className={styles.input} onChange={event => setLogin(event.target.value)}/>
                        <Image className={styles.eye} height={56} width={56} src={'/login/eye.png'} alt={'eye'} onClick={()=>{setShowPass(!showPass)}}/>
                    </div>
                </div>

                <div className={styles.buttonsBody}>
                    <button className={styles.btn} onClick={()=>{

                    }}>ВХОД</button>

                    <span className={styles.feedbackBtn}>Обратная связь</span>
                </div>
            </div>

            <div className={classnames(styles.slider)}>
                {/*<Image src={'/login/img.png'} alt={'slider'} className={styles.sliderImg} height={747} width={768}/>*/}

                <div className={classnames(styles.slideCard, styles.firstCard)}>
                    <Image src={'/login/azs.png'} alt={'AZS'} width={497} height={274} className={styles.cardImg}/>
                    <div className={styles.sliderCardFooter}>
                        <div className={styles.cardTextBlock}>
                            <span className={styles.cardNew}>НОВЫЙ</span>
                            <motion.h3 layout style={{opacity: showTitle ? 1 : 0}} className={styles.cardTitle} ref={sliderTitle} id={'sliderCardTitle'}>{slides[currentSlideId].title}</motion.h3>
                        </div>

                        <div className={styles.buttons}>
                            {slides.map((item, idx, sliderss)=>{
                                return (
                                    <div key={idx} className={classnames(currentSlideId == idx ? styles.activeSlideBtn : styles.slideBtn)}
                                         onClick={()=>{
                                             setShowTitle(false)
                                             setTimeout(()=>{
                                                 setCurrentSlideId(idx)
                                                 setShowTitle(true)
                                             }, 300)
                                         }}
                                    >

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={classnames(styles.slideCard, styles.secondCard)}>
                    <Image src={'/login/azs.png'} alt={'AZS'} width={497} height={274} className={styles.cardImg}/>
                    <div className={styles.sliderCardFooter}>
                        <div className={styles.cardTextBlock}>
                            <span className={styles.cardNew}>НОВЫЙ</span>
                            <motion.h3 layout style={{opacity: showTitle ? 1 : 0}} className={styles.cardTitle} ref={sliderTitle} id={'sliderCardTitle'}>{slides[currentSlideId == 0 ? 2 : currentSlideId-1].title}</motion.h3>
                        </div>

                        <div className={styles.buttons}>
                            {slides.map((item, idx, sliderss)=>{
                                return (
                                    <div key={idx} className={classnames(currentSlideId == idx ? styles.activeSlideBtn : styles.slideBtn)}
                                         onClick={()=>{
                                             setShowTitle(false)
                                             setTimeout(()=>{
                                                 setCurrentSlideId(idx)
                                                 setShowTitle(true)
                                             }, 300)
                                         }}
                                    >

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={classnames(styles.slideCard, styles.thirdCard)}>
                    <Image src={'/login/azs.png'} alt={'AZS'} width={497} height={274} className={styles.cardImg}/>
                    <div className={styles.sliderCardFooter}>
                        <div className={styles.cardTextBlock}>
                            <span className={styles.cardNew}>НОВЫЙ</span>
                            <motion.h3 layout style={{opacity: showTitle ? 1 : 0}} className={styles.cardTitle} ref={sliderTitle} id={'sliderCardTitle'}>{slides[currentSlideId == 0 ? 2 : currentSlideId-1].title}</motion.h3>
                        </div>

                        <div className={styles.buttons}>
                            {slides.map((item, idx, sliderss)=>{
                                return (
                                    <div key={idx} className={classnames(currentSlideId == idx ? styles.activeSlideBtn : styles.slideBtn)}
                                         onClick={()=>{
                                             setShowTitle(false)
                                             setTimeout(()=>{
                                                 setCurrentSlideId(idx)
                                                 setShowTitle(true)
                                             }, 300)
                                         }}
                                    >

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBlock;