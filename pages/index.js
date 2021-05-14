import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/layout'
import utilStyles from '../styles/ultils.module.css'
import styles from '../styles/index.module.css'
import Link from "next/link";
export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h2 className={styles.header}>Welcome to the Copypasta Generator</h2>
                <p>
                    Navigate to one of these copypastas below  and then go wild by changing the inputs and then copying it:
                </p>
            </section>
            <section>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.card}>
                            <Link href="/navySeal">
                                <a>Navy Seal Copypasta</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.card}>
                            <Link href="/GNU-Linux">
                                <a>GNU Interjection</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.card}>
                            <Link href="/RickAndMorty">
                                <a>Rick and Mory</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
