let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let newquote = document.querySelector('#new-quote');
let quotes = [
    {
        quote: `'Tell me and I forget. Teach me and I remember. Involve me and I learn.'`,
        person: `'Benjamin Franklin'`
    },
    {
        quote: `'I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.'`,
        person: `'Abraham Lincoln'`
    },
    {
        quote: `'Always remember that you are absolutely unique. Just like everyone else.'`,
        person: `'Margaret Mead'`
    },
    {
        quote: `'Challenges are what make life interesting and overcoming them is what makes life meaningful.'`,
        person: `'Joshua J. Marine'`
    },
    {
        quote: `'Don’t judge each day by the harvest you reap but by the seeds that you plant.'`,
        person: `'Robert Louis Stevenson'`
    },
    {
        quote: `'Education is not the filling of a pail but the lighting of a fire.'`,
        person: `'William Butler Yeats'`
    }
];


newquote.addEventListener('click', function () {
    const random = Math.floor(Math.random() * quotes.length) + 1;
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})


