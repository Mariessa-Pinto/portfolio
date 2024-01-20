import Image from 'next/image'
import styles from './OtherProjects.module.css'
import Link from 'next/link'


export default function OtherProjects({
    title1 = "title",
    imageURL1 = "",
    link1 = "",
    title2 = "title",
    imageURL2 = "",
    link2 = "",
    title3 = "title",
    imageURL3 = "",
    link3 = ""
}) {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.alignText}>
                    <h2 className={styles.header}>Other Projects</h2>
                </div>
                <div className={styles.buttons}>
                    <Link href={link1} className={styles.link}>
                        <div className={styles.projectButton}>
                            <div className={styles.leftSide}>
                                <Image
                                    src={imageURL1}
                                    alt=''
                                    width={256}
                                    height={60}
                                />
                                <h5 className={styles.title}>{title1}</h5>
                            </div>
                            <Image
                                className={styles.image}
                                src={''}
                                alt=''
                                width={72}
                                height={52}
                            />
                        </div>
                    </Link>
                    <Link href={link2} className={styles.link}>
                        <div className={styles.projectButton}>
                            <div className={styles.leftSide}>
                                <Image
                                    src={imageURL2}
                                    alt=''
                                    width={256}
                                    height={60}
                                />
                                <h5 className={styles.title}>{title2}</h5>
                            </div>
                            <Image
                                className={styles.image}
                                src={''}
                                alt=''
                                width={72}
                                height={52}
                            />
                        </div>
                    </Link>
                    <Link href={link3} className={styles.link}>
                        <div className={styles.projectButton}>
                            <div className={styles.leftSide}>
                                <Image
                                    src={imageURL3}
                                    alt=''
                                    width={256}
                                    height={60}
                                />
                                <h5 className={styles.title}>{title3}</h5>
                            </div>
                            <Image
                                className={styles.image}
                                src={''}
                                alt=''
                                width={72}
                                height={52}
                            />
                        </div>
                    </Link>
                </div>
            </main>
        </>
    )
}   