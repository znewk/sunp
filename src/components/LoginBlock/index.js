import styles from "./styles.module.css"
import {useEffect, useState} from "react";
import Image from "next/image";

const LoginBlock = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const [showPass, setShowPass] = useState(false)

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
        </div>
    )
}

export default LoginBlock;