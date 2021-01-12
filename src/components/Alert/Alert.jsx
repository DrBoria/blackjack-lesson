import React from 'react'
import styles from './Alert.module.scss';

export default function Alert({dealerSum, userSum}) {
    let message;
    if (userSum < dealerSum && dealerSum < 22 || dealerSum > 21) {
        message = "Дилер Вин";
    } else if (userSum === dealerSum) {
        message = "Победила дружба";
    } else {
        message = "Выиграл юзер";
    }

    return (
        <div className={styles.alertContainer}>
            {message}
        </div>
    )
}
