import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout/layout'
import utilStyles from '../styles/ultils.module.css'
import styles from '../styles/index.module.css'
import Link from "next/link";

export default function contribute() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h2 className={styles.header}>Contribute to the Copypasta Generator</h2>
                <div>
                    <h4>
                        Do you have any other Copypastas you would like to see?
                    </h4>

                    <a href="https://github.com/acrose99/NavySealCopyPasta/issues">
                        File an issue here to request an addition.
                    </a>
                    <p>
                        This site aims to be a low key and open source alternative to stuff like twitchquotes.com, for two main reasons:
                    </p>
                    <p>1. Those sites are trying to make a profit off data and ads</p>
                    <p>2. Those sites are based off Twitch culture, which sucks.</p>
                    <p>I made this site in high school to screw around with friends on Discord as a joke and I have no other ambitions other then make bad jokes easier to make. </p>

                </div>
            </section>
        </Layout>
    )
}
