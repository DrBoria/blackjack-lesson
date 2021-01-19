import React from 'react'
import styles from './Alert.module.scss';

export default function Alert({dealerSum, users}) {
    let message;
    const userSum = users[0].sum;
    if (userSum > 21 || userSum < dealerSum && dealerSum < 22) {
        message = "Дилер Вин";
    } else if (userSum === dealerSum) {
        message = "Победила дружба";
    } else {
        message = `Выиграл ${users.map(user => user.name)}`;
    }

    return (
        <div className={styles.alertContainer}>
            {message}
        </div>
    )
}
