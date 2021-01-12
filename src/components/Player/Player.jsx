import React from 'react'
import styles from './Player.module.scss';

export default function Player({ name, score }) {
    return (
        <div className={styles.userContainer}>
            <h1>{name}</h1>
            <h2>{score}</h2>
        </div>
    )
}
