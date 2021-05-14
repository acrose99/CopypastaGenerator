import Layout from '../components/Layout/layout'
import styles from "../styles/containers.module.css"
import Link from 'next/link'
import Head from 'next/head'
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function navySeal() {
    /* State for Fields */
    const [copied, setCopied] = useState(false);
    const [personString, setPersonString] =  useState("you little bitch");
    const [graduatedString, setGraduatedString] = useState("Navy Seals");
    const [raidString, setRaidString] =useState("Al Qaeda");
    const [numberString, setNumberString] =useState("300 confirmed kills");
    const [trainedString, setTrainedString] = useState("gorilla warfare");
    const [topString, setTopString] = useState("sniper in the entire U.S armed forces");
    const [targetString, setTargetString] = useState("target");
    const [contactString, setContactString] = useState("secret network of spies across the USA");
    const [methodString, setMethodString] = useState("kill you in over seven hundred ways");
    const [withJustString, setWithJustString] = useState("bare hands");
    const [extensiveString, setExtensiveString] = useState("trained in unarmed combat");
    const [butString, setButString] = useState("the entire arsenal of the United States Marine Corps");
    const [extentString, setExtentString] = useState("wipe your miserable ass off the face of the continent, you little shit.");

    const navySealString = "What the fuck did you just fucking say about me " + personString + "? I'll have you know I graduated top of my class in the " + graduatedString + " and I've been involved in numerous secret raids on " + raidString +
        " and I have over " + numberString + ". I am trained in " + trainedString + " and I'm the top " + topString +
        ". You are nothing to me but just another " + targetString
        + ". I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my " + contactString
        + ", so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can " + methodString
        + " and that's just with my " + withJustString + ". Not only am I extensively " + extensiveString + " but I have access to " + butString + " and I will use it to its full extent to " + extentString +
        "If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot.";

    function handleChange(functionCalled, e) {
        functionCalled(e.target.value);
    }

    return (
        <Layout>
            <Head>
                <title>Navy Seal Copypasta</title>
            </Head>
            <header>
                <h1 className={styles.header}>Navy Seal Copypasta</h1>
            </header>
            <section>
                <div>
                    <label>What the fuck did you just fucking say about me
                        <input id="PersonString" onChange={(e) => handleChange(setPersonString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label>I graduated top of my class in the
                        <input id="GraduatedString" onChange={(e) => handleChange(setGraduatedString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> I've been involved in numerous secret raids on
                        <input id="RaidString" onChange={(e) => handleChange(setRaidString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> and I have over
                        <input id="NumberString" onChange={(e) => handleChange(setNumberString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> I am trained in
                        <input id="TrainedString" onChange={(e) => handleChange(setTrainedString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> and I'm the top
                        <input id="TopString" onChange={(e) => handleChange(setTopString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> You are nothing to me but just another
                        <input id="TargetString" onChange={(e) => handleChange(setTargetString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> I am contacting my
                        <input id="ContactString" onChange={(e) => handleChange(setContactString, e)} type="text"/>
                    </label>
                </div>
                <label>I can
                    <input id="MethodString" onChange={(e) => handleChange(setMethodString, e)} type="text"/>
                </label>
                <div>
                    <label> and that's just with my
                        <input id="WithJustString" onChange={(e) => handleChange(setWithJustString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label>Not only am I extensively
                        <input id="ExtensiveString" onChange={(e) => handleChange(setExtensiveString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> but I have access to
                        <input id="ButString" onChange={(e) => handleChange(setButString, e)} type="text"/>
                    </label>
                </div>
                <div>
                    <label> and I will use it to its full extent to
                        <input id="ExtentString" onChange={(e) => handleChange(setExtentString, e)} type="text"/>
                    </label>
                </div>
            </section>
            <section>
                <h2 className={styles.header}>Your Copypasta:</h2>
                <p id="copypasta" className={styles.copypasta}>
                    What the fuck did you just fucking say about me <span className={styles.span}>{personString}</span>? I'll have you know I graduated top of my class in the <span>{graduatedString}</span>
                    and I've been involved in numerous secret raids on <span className={styles.span}>{raidString}</span>
                     and I have over <span className={styles.span}> {numberString}</span>. I am trained in <span className={styles.span}>{trainedString}</span> and I'm the top <span className={styles.span}>{topString}</span>.
                     You are nothing to me but just another <span className={styles.span}>{targetString}</span>.
                    I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker.
                    As we speak I am contacting my <span className={styles.span}>{contactString}</span>, so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid.
                    I can be anywhere, anytime, and I can <span className={styles.span}>{methodString}</span>
                     and that's just with my <span className={styles.span}>{withJustString}</span>. Not only am I extensively <span className={styles.span}>{extensiveString}</span> but I have access to <span className={styles.span}>{butString}</span>
                    and I will use it to its full extent to <span className={styles.span}>{extentString}</span>. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue.
                    But you couldn't, you didn't, and now you're paying the price, you goddamn idiot.
                </p>
                <CopyToClipboard onCopy={() => setCopied(true)} text={navySealString}>
                    <button >Copy to clipboard with button</button>
                </CopyToClipboard>
                {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            </section>
        </Layout>
    )
}
