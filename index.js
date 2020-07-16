const people = ["Ada", "Brendan", "Ali"]
const thankYouMessages = []

function writeCards(people, occasion) {
    for (let i = 0; i < people.length; i++) {
        thankYouMessages.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`)
    }

    return thankYouMessages;
}

function countDown(int) {
    while (0 <= int) {
        console.log(int);
        int--;
    }
}