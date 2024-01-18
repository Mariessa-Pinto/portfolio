import Image from 'next/image'
import styles from './OtherProjects.module.css'
import Link from 'next/link'


export default function OtherProjects({
    title1="title",
    imageURL1="",
    title2="title",
    imageURL2="",
    title3="title",
    imageURL3=""
}) {
    return (
        <>
            <main className={styles.main}>
                <div>
                    <h2>Other Projects</h2>
                    <div className={styles.projectButton}>
                        <Image
                            src={imageURL1}
                            alt=''
                            width={100}
                            height={50}
                        />
                        <h5>{title1}</h5>
                        <Image
                            src={''}
                            alt=''
                            width={100}
                            height={50}
                        />
                    </div>
                    <div className={styles.projectButton}>
                        <Image
                            src={imageURL2}
                            alt=''
                            width={100}
                            height={50}
                        />
                        <h5>{title2}</h5>
                        <Image
                            src={''}
                            alt=''
                            width={100}
                            height={50}
                        />
                    </div>
                    <div className={styles.projectButton}>
                        <Image
                            src={imageURL3}
                            alt=''
                            width={100}
                            height={50}
                        />
                        <h5>{title3}</h5>
                        <Image
                            src={''}
                            alt=''
                            width={100}
                            height={50}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}   