import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Student Empowerment Team Kenya</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/set/about">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/set/executive">Executive</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/set/news">News</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/set/blog">Blog</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/set/contact">Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar