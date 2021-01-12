import React from 'react'
import styles from './AskPopup.module.scss';

export default function AskPopup({userSum, takeCard, endTurn}) {
    return (
        <div className={styles.cardContainer}>
            Сумма ваших карт {userSum}, хотите взять ещё?
            <div>
                <button onClick={takeCard}>Да</button>
                <button onClick={endTurn}>Нет</button>
            </div>
        </div>
    )
}
