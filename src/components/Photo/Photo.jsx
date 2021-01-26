import React from 'react'
import styles from './Photo.module.scss'

export default function Photo({ src }) {
    return (
        <div className={styles.photoContainer}>
            <img src={src} width="200" height="200" alt=""/>
        </div>
    )
}
