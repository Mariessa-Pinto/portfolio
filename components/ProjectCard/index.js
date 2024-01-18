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
                <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                    <p>{description}</p>
                    <Link href={projectURL}><button>View Project</button></Link>
                </div>
                <div>
                    <Image
                        src={imageSrc}
                        alt=''
                        width={300}
                        height={200}
                    />
                </div>
            </main>
        </>
    )
}