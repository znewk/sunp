import styles from "../src/styles/pages/index.module.css"
import {useEffect, useState} from "react"
import Head from "next/head";
import LoginBlock from "../src/components/LoginBlock";

const Index = () => {

    useEffect(()=>{
        console.log('path: / - is successfully uploaded')
    }, [])

    return (
        <div>
            <Head>
                <title>SUNP</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <LoginBlock/>
        </div>
    )
}

export default Index;