import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;