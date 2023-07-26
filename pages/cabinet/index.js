import styles from '../../src/styles/pages/cabinet/cabinet.module.css'
import {useEffect} from "react";
import Head from "next/head";
import SideBar from "../../src/components/SideBar";

const Cabinet = () => {
    useEffect(() => {

    }, []);

    return (
        <div>
            <Head>
                <title>SUNP - Отпуск нефтепродуктов</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <SideBar/>
        </div>
    )
}

export default Cabinet;