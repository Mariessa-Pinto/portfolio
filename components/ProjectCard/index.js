import Image from 'next/image'
import styles from './ProjectCard.module.css'
import Link from 'next/link'


export default function ProjectCard({
    title="title",
    subtitle="subtitle",
    description="description",
    projectURL="",
    imageSrc=""
}) {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.info}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.dates}>{subtitle}</p>
                    <p className={styles.description}>{description}</p>
                    <Link href={projectURL}><button className={styles.button}>View Project</button></Link>
                </div>
                <div className={styles.image}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={440}
                        height={248}
                    />
                </div>
            </main>
        </>
    )
}