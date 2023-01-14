import styles from '../styles/RandomUser.module.css'
import BlogCard from './BlogCard'

const RecentBlogs = () => {
  return (
    <div className={styles.recentBlogs}>
        <div className={styles.recentBlogsTitle}>Recent blogs</div>
        <div className={styles.blogsContainer}>
          {
            [1, 2, 3, 4, 5].map(key => <BlogCard key={key}/>)
          }
        </div>
    </div>
  )
}

export default RecentBlogs