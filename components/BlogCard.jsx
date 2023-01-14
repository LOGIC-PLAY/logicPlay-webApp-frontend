import Image from 'next/image'
import styles from '../styles/RandomUser.module.css'

import blogImage from '../assets/images/blog.jpg'

const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
        <Image className={styles.blogCardImage} src={blogImage} width={297} height={232}/>
        <div>
        <div className={styles.blogCardSubtitle}>Lorem Ipsum Dolor</div>
        <div className={styles.blogCardTitle}>Social interactions and relationship in college</div>
        <div className={styles.blogCardContent}>1.1 By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day...</div>
        <button className={styles.blogCardButton}>
            Read More
        </button>
        </div>
    </div>
  )
}

export default BlogCard