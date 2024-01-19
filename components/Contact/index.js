import Image from 'next/image'
import styles from './Contact.module.css'
import Link from 'next/link'
import { useEffect } from 'react';


export default function Contact() {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            backToTopButton.addEventListener('click', handleScrollToTop);
        }
        return () => {
            if (backToTopButton) {
                backToTopButton.removeEventListener('click', handleScrollToTop);
            }
        };
    }, []);

    return (
        <>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <div>
                        <h2 className={styles.header}>Contact me</h2>
                        <p className={styles.text}>Think I would make a good fit?</p>
                        <p className={styles.text}>Reach out or follow my work</p>
                    </div>
                    <div className={styles.allButtons}>
                        <div className={styles.topButtons}>
                            <Link href='https://github.com/Mariessa-Pinto' className={styles.buttonLink}>
                                <button className={styles.button}>
                                    <Image
                                        src={'./icons/github.svg'}
                                        alt=''
                                        width={30}
                                        height={30}
                                    />
                                    Github
                                </button>
                            </Link>
                            <Link href='https://www.linkedin.com/in/mariessa-pinto' className={styles.buttonLink}>
                                <button className={styles.button}>
                                    <Image
                                        src={'./icons/linkedin.svg'}
                                        alt=''
                                        width={30}
                                        height={30}
                                    />
                                    LinkedIn
                                </button>
                            </Link>
                        </div>
                        <div className={styles.bottomButtons}>
                            <Link href='' className={styles.buttonLink}>
                                <button className={styles.button}>
                                    <Image
                                        src={'./icons/resume.svg'}
                                        alt=''
                                        width={24}
                                        height={30}
                                    />
                                    Resume
                                </button>
                            </Link>
                            <Link href='' className={styles.buttonLink}>
                                <button className={styles.button}>
                                    <Image
                                        src={'./icons/email.svg'}
                                        alt=''
                                        width={30}
                                        height={24}
                                    />
                                    Email
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.positionBackToTop}>
                    <div id="back-to-top" className={styles.backToTop}>
                        <div className={styles.line}></div>
                        <p className={styles.buttonText}>Back to the top</p>
                    </div>
                </div>
                <div className={styles.copyright}><p className={styles.legal}>&copy; {currentYear} Mariessa Pinto</p></div>
            </main>
        </>
    )
}   