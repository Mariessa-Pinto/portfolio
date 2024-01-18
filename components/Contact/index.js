import Image from 'next/image'
import styles from './Contact.module.css'
import Link from 'next/link'


export default function Contact() {
    return (
        <>
            <main className={styles.main}>
                <div>
                    <h2>Contact me</h2>
                    <p>Think I would make a good fit?</p>
                    <p>Reach out or follow my work</p>
                </div>
                <div>
                    <Link href=''>
                        <button>
                            <Image
                                src={''}
                                alt=''
                                width={10}
                                height={10}
                            />
                            Github
                        </button>
                    </Link>
                    <Link href=''>
                        <button>
                            <Image
                                src={''}
                                alt=''
                                width={10}
                                height={10}
                            />
                            LinkedIn
                        </button>
                    </Link>
                    <Link href=''>
                        <button>
                            <Image
                                src={''}
                                alt=''
                                width={10}
                                height={10}
                            />
                            Resume
                        </button>
                    </Link>
                    <Link href=''>
                        <button>
                            <Image
                                src={''}
                                alt=''
                                width={10}
                                height={10}
                            />
                            Email
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}   