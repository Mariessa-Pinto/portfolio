import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.image}>
                    <Link href={'/'}>
                        <Image
                            src={''}
                            alt=""
                        />
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link className={styles.link} href={'/'}><p className={styles.link}>Web Development</p></Link>
                    <Link className={styles.link} href={'/designs'}><p className={styles.link}>Design</p></Link>
                    <Link className={styles.link} href={'/'}><p className={styles.link}>Contact</p></Link>
                </div>
            </main>
        </>
    )
}