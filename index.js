class jokeMachine { 
    constructor() {
        this.phrases = [
        'What did one toilet say to the other? You appear a bit flushed.',
        'Why are most people tired on April 1? They\'ve just finished a 31-day March.',
        'How do you make a tissue dance? Put a little boogie in it',
        'Why did the rabbit go to the salon? It was having a bad hare day.',
        'I enjoy telling bad puns. That\'s just how eye roll.',
        'Why did the man bring his watch to the bank? He wanted to save time.',
        'Where do penguins go to vote? The North Poll.',
        'How do you make a robot angry? Keep pushing his buttons.',
        'How do you light up a sports stadium? With a soccer match.',
        'Did you hear about the kidnapping at school? They woke him up.',
        'I told a bad chemistry joke once. I got no reaction.',
        'Why did the cow go to Hollywood? To be in the moo-vies.',
        'I just flew in from California. Boy, are my arms tired!',
        'How do mice floss their teeth? With string cheese.',
        'What do you call a happy cowboy? A jolly rancher',
        'What did one wall say to the other? I’ll meet you at the corner.',
        'What do clouds wear beneath their pants? Thunderwear.',
        'When\'s the best time to call your dentist? Tooth-hurty.',
        ]
    }

    pickRandomJoke() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }
}

const selectJoke = new jokeMachine();
const randomJoke = selectJoke.pickRandomJoke();
console.log(randomJoke);




/*const phrases = [
    'What did one toilet say to the other? You appear a bit flushed.',
    'Why are most people tired on April 1? They\'ve just finished a 31-day March.',
    'How do you make a tissue dance? Put a little boogie in it',
    'Why did the rabbit go to the salon? It was having a bad hare day.',
    'I enjoy telling bad puns. That\'s just how eye roll.',
    'Why did the man bring his watch to the bank? He wanted to save time.',
    'Where do penguins go to vote? The North Poll.',
    'How do you make a robot angry? Keep pushing his buttons.',
    'How do you light up a sports stadium? With a soccer match.',
    'Did you hear about the kidnapping at school? They woke him up.',
    'I told a bad chemistry joke once. I got no reaction.',
    'Why did the cow go to Hollywood? To be in the moo-vies.',
    'I just flew in from California. Boy, are my arms tired!',
    'How do mice floss their teeth? With string cheese.',
    'What do you call a happy cowboy? A jolly rancher',
    'What did one wall say to the other? I’ll meet you at the corner.',
    'What do clouds wear beneath their pants? Thunderwear.',
    'When\'s the best time to call your dentist? Tooth-hurty.',
]

const randomNumber = Math.floor(Math.random() * phrases.length);

const selectPhrases = phrases[randomNumber];

console.log(selectPhrases);

*/