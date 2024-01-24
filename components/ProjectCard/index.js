import Image from 'next/image'
import styles from './ProjectCard.module.css'
import Link from 'next/link'


export default function ProjectCard({
    title="title",
    subtitle="subtitle",
    description="description",
    projectURL="",
    imageSrc="",
    width=100,
    height=100
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
                        className={styles.img}
                        src={imageSrc}
                        alt={title}
                        width={width}
                        height={height}
                    />
                </div>
            </main>
        </>
    )
}