import Link from 'next/link'
import ContextChanger from "../contextChanger";
import styles from "./Navbar.module.css"

export default function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <div className={styles.linkContainer}>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href="/navySeal">
                        <a className={styles.link}>Navy Seal</a>
                    </Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href="/GNU-Linux">
                        <a className={styles.link}>GNU Interjection</a>
                    </Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href="/RickAndMorty">
                        <a className={styles.link}>Rick And Morty</a>
                    </Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href="/contribute">
                        <a className={styles.link}>Contribute</a>
                    </Link>
                </div>
                {/*<div className={styles.linkContainer}>*/}
                {/*    <ContextChanger/>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}
