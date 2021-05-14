import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/ultils.module.css'
import Link from 'next/link'

const name = 'Alex Rose'
export const siteTitle = 'CopyPasta Generator'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Build your own copypasta using famous presets"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>Copypasta: NavySeal</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>{children}</main>
        </div>
    )
}
