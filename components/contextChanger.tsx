import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout/layout'
import utilStyles from '../styles/ultils.module.css'
import styles from '../styles/index.module.css'

import { Icon, InlineIcon } from '@iconify/react';
import sunFill from '@iconify/icons-eva/sun-fill';
import {useAppContext} from "../context/AppContext";

export default function contextChanger(props) {
    let theme = useAppContext;
        return (
            <div>
                <Icon height={32} width={32} icon={sunFill} style={{color: '#0070f3'}} />
            </div>
        )
}
