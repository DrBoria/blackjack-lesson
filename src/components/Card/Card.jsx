import React from 'react'
import styles from './Card.module.scss';

export default function Card({children}) {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}
