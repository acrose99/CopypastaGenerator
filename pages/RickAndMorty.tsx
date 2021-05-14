import Layout from '../components/Layout/layout'
import styles from "../styles/containers.module.css"
import Link from 'next/link'
import Head from 'next/head'
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function rickAndMorty() {
    const [copied, setCopied] = useState(false);
    /* State for Fields */
    const [mediaString, setMediaString] =  useState("Rick and Morty");
    const [graspString, setGraspString] = useState("theoretical physics");
    const [outlookString, setOutlookString] =useState("Rick's nihilistic outlook");
    const [philosophyString, setPhilosophyString] = useState("his personal philosophy draws heavily from Narodnaya Volya literature, for instance");
    const [topString, setTopString] = useState("sniper in the entire U.S armed forces");
    const [catchphraseString, setCatchphraseString] = useState("Rick's existential catchphrase 'Wubba Lubba Dub Dub' which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons");
    const [authorString, setAuthorString] = useState("Dan Harmon's");

    const rickAndMortyString = "To be fair, you have to have a very high IQ to understand " + mediaString + ". The humor is extremely subtle, and without a solid grasp of " + graspString + " most of the jokes will go over a typical viewer's head. There's also " + outlookString +
        + "which is deftly woven into his characterisation -" + philosophyString +
        ", for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike" + mediaString +
        " truly ARE idiot" + "of course they wouldn't appreciate, for instance, the humour in " + catchphraseString +
        " I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as " + authorString + "genius unfolds itself on their television screens. " +
        "What fools... how I pity them. 😂 And yes by the way, I DO have a " + mediaString + "tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand."


    function handleChange(functionCalled, e) {
        functionCalled(e.target.value);
    }

    return (
        <Layout>
            <Head>
                <title>Rick and Morty Copypasta</title>
            </Head>
            <header>
                <h1 className={styles.header}>Rick and Morty Copypasta</h1>
            </header>
            <section>
                <div className={styles.input}>
                    <label>Name of show/movie/etc
                        <input defaultValue="Rick And Morty" id="MediaString" onChange={(e) => handleChange(setMediaString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label>without a solid grasp of
                        <input defaultValue="Theoretical Physics" id="GraspString" onChange={(e) => handleChange(setGraspString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label> There's also Rick's
                        <input defaultValue="nihilistic outlook" id="OutlookString" onChange={(e) => handleChange(setOutlookString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label> existential catchphrase
                        <input defaultValue="Rick's existencial catchphrase 'Wubba Lubba Dub Dub'" id="CatchphraseString" onChange={(e) => handleChange(setCatchphraseString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label> director/author/etc
                        <input defaultValue="Dan Harmon" id="AuthorString" onChange={(e) => handleChange(setAuthorString, e)} type="text"/>
                    </label>
                </div>
            </section>
            <section>
                <h2 className={styles.header}>Your Copypasta:</h2>
                <p id="copypasta" className={styles.copypasta}>
                    To be fair, you have to have a very high IQ to understand <span className={styles.span}>{mediaString}</span>. The humor is extremely subtle, and without a solid grasp of <span className={styles.span}> {graspString} </span>
                    most of the jokes will go over a typical viewer's head. There's also <span className={styles.span}>{outlookString} </span>
                    which is deftly woven into his characterisation -<span className={styles.span}> {philosophyString}</span>
                    . The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike <span className={styles.span}> {mediaString}</span>
                    truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in <span className={styles.span}>{catchphraseString}</span>.
                    I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as <span className={styles.span}>{authorString}</span>'s
                    genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have <span className={styles.span}>{mediaString}</span> And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand.
                </p>
                <CopyToClipboard onCopy={() => setCopied(true)} text={rickAndMortyString}>
                    <button >Copy to clipboard with button</button>
                </CopyToClipboard>
                {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            </section>
        </Layout>
    )
}
