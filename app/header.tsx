import React from 'react';
import styles from './header.module.css';



export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Portfolio</h1>
        </header>
    )
}