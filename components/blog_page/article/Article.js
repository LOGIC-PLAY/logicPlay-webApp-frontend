import React from 'react'
import styles from "./article.module.css"

const Article = (props) => {
  return (
    <div className={styles.art}>
      <div>
        <div className={styles.head}>
        {props.title}
        </div>
        <div className={styles.subTitle}>
          <span className={styles.publisherName}>{props.publisher}</span>
          <span className={styles.date}>Published on {props.date}</span>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={props.imgUrl}></img>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>{props.content}</p>
      </div>
      <div className={styles.footContainer}>
        <p className={styles.foot}><span className={styles.footSpan}>published by: {props.publisher}</span></p>
      </div>

    </div>
  )
}

export default Article