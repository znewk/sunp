import styles from '../../src/styles/pages/cabinet/cabinet.module.css'
import {useEffect, useState} from "react";
import Head from "next/head";
import SideBar from "../../src/components/SideBar";
import CabinetPageTitle from "../../src/components/CabinetPageTitle";
import Table from "../../src/components/Table";
import NeftPricesTable from "../../src/components/Table/Tables/NeftPricesTable";
import Loader from "../../src/components/Loader";

const Cabinet = () => {

    const [loadingPage, setLoadingPage] = useState(true)

    const roles = [
        {
            role: 'admin'
        },
        {
            role: 'azs',
            tabs: [
                'Отпуски'
            ],
            neftPrices: [
                {
                    name: 'АИ-92',
                    preferentialPrice: 192,
                    marginalPrice: 200,
                    updateDate: '24.07.2023'
                },
                {
                    name: 'АИ-95',
                    preferentialPrice: 211,
                    marginalPrice: 213,
                    updateDate: '15.09.2022'
                },
                {
                    name: 'АИ-92',
                    preferentialPrice: 295,
                    marginalPrice: 450,
                    updateDate: '07.06.2023'
                },
            ]
        },
        {
            role: 'gos',
            tabs: [
                'Отпуски',
                'Отчеты'
            ]
        }
    ]

    const tabs = [
        {
            title: 'Отпуски'
        }
    ]

    const [currentTab, setCurrentTab] = useState(tabs[0])
    const [role, setRole] = useState(roles[1])


    const setter = async () => {
        setRole(roles[1])

        setLoadingPage(false)
    }


    useEffect(() => {
        setter()
    }, []);

    return (
        <div>
            <Head>
                <title>SUNP - Отпуск нефтепродуктов</title>
                <link rel="icon" href="/favicon.png" />
            </Head>


            {
                loadingPage
                    ?
                    (
                        <div className={styles.loading}>
                            <Loader/>
                        </div>
                    )
                    :
                    (
                        <>
                            <SideBar role={role}/>

                            <div className={styles.contentBox}>
                                <CabinetPageTitle title={role.tabs[0]}/>

                                <Table title={'Цены на нефтепродукты'} info={role.neftPrices}/>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default Cabinet;