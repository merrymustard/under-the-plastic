/*jshint esversion: 6 */

const sound = new Audio();
const button = document.querySelector('button');
button.addEventListener('click', playSound);

function playSound(){
    sound.src = 'audio/SpongeBob.mp3';
    sound.play();
}