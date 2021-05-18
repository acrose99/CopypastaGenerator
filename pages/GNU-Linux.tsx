import Layout from '../components/Layout/layout'
import styles from "../styles/containers.module.css"
import Link from 'next/link'
import Head from 'next/head'
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function GNULinux() {
    const [copied, setCopied] = useState(false);

    /* State for Fields */
    const [referString, setReferString] =  useState("Linux");
    const [actuallyString, setActuallyString] = useState("GNU");
    const [definedByString, setDefinedByString] =useState("utilities and vital system components comprising a full OS as defined by POSIX");
    const [userString, setUserString] = useState("computer users");
    const [kernelString, setKernalString] = useState("kernel: the program in the system that allocates the machine's resources to the other programs that you run");
    const [partString, setPartString] = useState("The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system");


    const linuxString = "I'd just like to interject for a moment.  What you're referring to as " + referString +
        " is in fact, " + actuallyString + "/" + referString + ", or as I've recently taken to calling it, " + actuallyString + " plus " + referString + ". " + referString
          + " is not an operating system unto itself, but rather another free component " +
        "of a fully functioning " + actuallyString + " system made useful by the " + actuallyString + " corelibs, shell" +
        " " + definedByString +
        ". Many " + userString + " run a modified version of the " + actuallyString + " system every day," +
        "without realizing it. Through a peculiar turn of events, the version of " + actuallyString +
        " which is widely used today is often called " + referString + ", and many of its users are " +
        "not aware that it is basically the " + actuallyString + " system, developed by the " + actuallyString + " Project." +
        " There really is a " + referString + ", and these people are using it, but it is just a" +
        "part of the system they use. " + referString + " " + kernelString + ". " + partString + " " + referString +
        " is normally used in combination with the " + actuallyString + " operating system: the whole system " +
        "is basically " + actuallyString + " with " + referString + " added, or " + actuallyString + "/" + referString + ". All the so-called " + referString +
        " distributions are really distributions of " + actuallyString + "/" + referString + "."

    function handleChange(functionCalled, e) {
        functionCalled(e.target.value);
    }

    return (
        <Layout>
            <Head>
                <title>GNU/Linux Copypasta</title>
            </Head>
            <header>
                <h1 className={styles.header}>GNU/Linux Copypasta</h1>
            </header>
            <section>
                <div className={styles.input}>
                    <label>What it is referred to:
                        <input defaultValue="Linux" id="ReferString" onChange={(e) => handleChange(setReferString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label>What it actually is:
                        <input defaultValue="GNU" id="ReferString" onChange={(e) => handleChange(setActuallyString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label>{referString} is defined by
                        <input defaultValue={definedByString} id="definedByString" onChange={(e) => handleChange(setDefinedByString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label> Users of {referString}
                        <input defaultValue={userString} id="UserString" onChange={(e) => handleChange(setUserString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label> The equivalent of kernel
                        <input defaultValue="kernel: the program in the system that allocates the machine's resources to the other programs that you run" id="KernelString" onChange={(e) => handleChange(setKernalString, e)} type="text"/>
                    </label>
                </div>
                <div className={styles.input}>
                    <label> Why is the equivalent of the kernel important?
                        <input defaultValue="The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system" id="PartString" onChange={(e) => handleChange(setPartString, e)} type="text"/>
                    </label>
                </div>
            </section>
            <section>
                <h2 className={styles.header}>Your Copypasta:</h2>
                <p id="copypasta" className={styles.copypasta}>
                    I'd just like to interject for a moment. What you're referring to as <span className={styles.span}> {referString} </span>,
                    is in fact, <span className={styles.span}> {actuallyString} </span>/<span className={styles.span}> {referString} </span>, or as I've recently taken to calling it, <span className={styles.span}> {actuallyString} </span> plus <span className={styles.span}> {referString} </span>.
                    <span className={styles.span}> {referString}</span> is not an operating system unto itself, but rather another free component
                    of a fully functioning <span className={styles.span}> {actuallyString} </span> system made useful by the <span className={styles.span}> {actuallyString} </span> corelibs, shell
                    <span className={styles.span}> {definedByString}</span>.

                    Many  <span className={styles.span}> {userString}</span> run a modified version of the <span className={styles.span}> {actuallyString} </span> system every day,
                    without realizing it.  Through a peculiar turn of events, the version of <span className={styles.span}> {actuallyString} </span>
                    which is widely used today is often called "<span className={styles.span}>{referString}</span>", and many of its users are
                    not aware that it is basically the <span className={styles.span}> {actuallyString} </span> system, developed by the <span className={styles.span}> {actuallyString} </span> Project.

                    There really is a <span className={styles.span}> {referString} </span>, and these people are using it, but it is just a
                    part of the system they use.  <span className={styles.span}> {referString} </span> is the <span className={styles.span}>{kernelString}</span>.
                    The <span className={styles.span}> {partString} </span> <span className={styles.span}> {referString} </span> is
                    normally used in combination with the <span className={styles.span}> {actuallyString} </span> operating system: the whole system
                    is basically <span className={styles.span}> {actuallyString} </span> with <span className={styles.span}> {referString} </span> added, or <span className={styles.span}> {actuallyString} </span>/<span className={styles.span}> {referString} </span>. All the so-called "<span className={styles.span}> {referString} </span>"
                    distributions are really distributions of <span className={styles.span}> {actuallyString} </span>/<span className={styles.span}> {referString} </span>.
                </p>
                <CopyToClipboard onCopy={() => setCopied(true)} text={linuxString}>
                    <button >Copy to clipboard with button</button>
                </CopyToClipboard>
                {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            </section>
        </Layout>
    )
}
