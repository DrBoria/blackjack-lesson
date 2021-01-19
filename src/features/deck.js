let cards = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10
];

let cards_playable = cards.slice();

function shuffle(array) {
    array.sort(function () {
        return Math.random() - 0.5
    });
}

shuffle(cards_playable);

export const getCard = () => {
    return cards_playable.pop();
}