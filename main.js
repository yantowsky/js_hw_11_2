const word = document.querySelector('h1');
console.log(word);
const button = document.querySelector('button');
console.log(button);

word.style.color = 'red';
button.style.cursor = 'pointer';

button.addEventListener('click', () => {
    word.style.color = word.style.color === 'red' ? 'blue' : 'red';
});