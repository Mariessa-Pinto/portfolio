import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Designs.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import video from '../public/innersightCommercial.mp4';
import videoTwo from '../public/map.mp4';
import videoThree from '../public/archery.mp4';
import { useState, useEffect } from 'react'

const projects = [
    {
        id: 1,
        category: 'Product Design',
        image: '/images/designs/cans.png',
        alt: 'Beer Can Design',
        title: 'Coastal Currents - Beer Can Design',
        date: 'November 2023',
        description: 'Designed three different flavor craft beer cans for Coastal Currents.'
    },
    {
        id: 3,
        category: 'Product Design',
        image: '/images/designs/ebook.png',
        alt: 'When Penguins Could Fly E-Book',
        title: 'When Penguins Could Fly E-Book',
        date: 'November 2023',
        description: 'Illustrated and created an interactive E-Book of the story "When Penguins Could Fly" by Garrett Johnson. The book translates from English-French and audio is provided on each page in order to give an immersive language learning experience.'
    },
    {
        id: 2,
        category: 'Product Design',
        image: '/images/designs/menu.png',
        alt: 'Menu',
        title: 'Menu',
        date: 'April 2023',
        description: 'Designed a menu for Farmhouse Bistro with InDesign and Illustrator.'
    },
    {
        id: 4,
        category: 'Motion Graphics',
        video: videoThree,
        alt: 'Archery Motion Graphic Video',
        title: 'Archery Info Video',
        date: 'May 2023',
        description: 'Created a motion graphics video with all assets created in Illustrator and animated in After Effects about the rules and formats of Olympic archery.'
    },
    {
        id: 5,
        category: 'Motion Graphics',
        video: videoTwo,
        alt: 'Tour of Abbotsford Motion Graphics',
        title: 'Tour of Abbotsford',
        date: 'March 2023',
        description: 'A motion graphics video tracking the movement of a car touring Abbotsford, BC and stopping at various locations. Made with Adobe After Effects.'
    },
    {
        id: 6,
        category: 'Motion Graphics',
        video: video,
        alt: 'App Launch Commercial',
        title: 'Innersight Commercial',
        date: 'November 2023',
        description: 'Wrote and directed the story based advertisement for Innersight, an AI-assisted journaling app.'
    },
    {
        id: 7,
        category: 'Vector Graphics',
        image: '/images/designs/sightMockup.png',
        alt: 'Archery Sight Drawing',
        title: 'Archery Sight Drawing',
        date: 'November 2022',
        description: 'A technical vector based drawing done in Adobe Illustrator. The item drawn is called a sight and used in elite Olympic archery. It allows the archer to aim at a target 70m away.'
    },
    {
        id: 8,
        category: 'Vector Graphics',
        image: '/images/designs/myWorld.png',
        alt: 'My World Drawing',
        title: 'My World Drawing',
        date: 'October 2022',
        description: 'A fun drawing of my ideal world created in Adobe Illustrator.'
    },
    {
        id: 9,
        category: 'Raster Graphics',
        image: '/images/designs/viegoMockup.png',
        alt: 'Viego Poster',
        title: 'Viego Poster',
        date: 'November 2023',
        description: 'Viego, the ruined king is a poster made using Photoshop with an image of a figurine of Viego and an image of an abandonned building.'
    },
    {
        id: 10,
        category: 'Raster Graphics',
        image: '/images/designs/creatureMockup.png',
        alt: 'Creature',
        title: 'HumFox PupSprite Creature',
        date: 'October 2023',
        description: 'Movie poster featuring a HumFox PupSprite creature created with the unique combination of a puppy, a hummingbird and a fox created with Photoshop.'
    },
    {
        id: 11,
        category: 'Raster Graphics',
        image: '/images/designs/faceDrawing.png',
        alt: 'Face Drawing',
        title: 'Face Drawing',
        date: 'October 2023',
        description: 'Raster drawing replicating face created with Photoshop.'
    },
];

export default function Designs() {
    const [selectedCategory, setSelectedCategory] = useState('Product Design');
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        filterProjects(selectedCategory);
    }, [selectedCategory]);

    const filterProjects = (category) => {
        const filtered = projects.filter(project => project.category === category);
        setFilteredProjects(filtered);
    };

    useEffect(() => {
        filterProjects('Product Design');
    }, []);

    return (
        <>
            <Head>
                <title>Mariessa Pinto Portfolio</title>
                <meta name="description" content="Mariessa Pinto - Full-stack Web Developer | View Projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.introSection}>
                    <Navbar />
                    <div className={styles.topContent}>
                        <div>
                            <h1 className={styles.title}>Design Projects</h1>
                            <div className={styles.banner}>
                                <div className={selectedCategory === 'Product Design' ? styles.selected : styles.unselected} onClick={() => { filterProjects('Product Design'), setSelectedCategory('Product Design') }}>Product Design</div>
                                <div className={selectedCategory === 'Motion Graphics' ? styles.selected : styles.unselected} onClick={() => { filterProjects('Motion Graphics'), setSelectedCategory('Motion Graphics') }}>Motion Graphics</div>
                                <div className={selectedCategory === 'Vector Graphics' ? styles.selected : styles.unselected} onClick={() => { filterProjects('Vector Graphics'), setSelectedCategory('Vector Graphics') }}>Vector Graphics</div>
                                <div className={selectedCategory === 'Raster Graphics' ? styles.selected : styles.unselected} onClick={() => { filterProjects('Raster Graphics'), setSelectedCategory('Raster Graphics') }}>Raster Graphics</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.projects}>
                        {filteredProjects.map(project => (
                            <div key={project.id} className={styles.project}>
                                {project.video ? (
                                    <video className={styles.video} controls>
                                        <source src={project.video} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        className={styles.img}
                                        src={project.image}
                                        alt={project.alt}
                                        height={462}
                                        width={700}
                                    />
                                )}
                                <div className={styles.projText}>
                                    <h2 className={styles.subtitle}>{project.title}</h2>
                                    <p className={styles.date}>{project.date}</p>
                                    <p>{project.description}</p>
                                    {project.id === 3 && (
                                        <Link href="https://indd.adobe.com/view/58cfbe4a-a60b-4635-86a4-c0b06462521d" target="_blank" rel="noopener noreferrer">
                                            <button className={styles.button}>View E-Book Live</button>
                                        </Link>
                                    )}
                                    <div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="contactSection" className={styles.contactSection}>
                    <Contact />
                </div>
            </main>
        </>
    )
}