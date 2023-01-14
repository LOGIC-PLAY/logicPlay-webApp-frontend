import Image from "next/image"

import randomImage from '../assets/images/profile.jpg'
import styles from '../styles/RandomUser.module.css'

const RandomUserProfile = () => {
    return (
        <div className={styles.profile}>
            <Image className={styles.image} src={randomImage} width={243} height={243} />

            <div className={styles.title}>
                Random User
            </div>
            <div className={styles.bio}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis non quia voluptates voluptatum alias sint quod soluta.
            </div>
            <div className={styles.data}>
                <div>
                    Number of readers: 30
                </div>
                <div>
                    Number of blogs: 2
                </div>
            </div>
        </div>
    )
}

export default RandomUserProfile