import randomWords from './node_modules/random-words/index.js';

var newWord;
const body = document.getElementById("body");
// body.addEventListener('onload', function () {
// 	console.log("HI");
// })
body.addEventListener("onload", generateWord);

function generateWord() {
	newWord = randomWords({exactly: 1, maxLength: 5})[0];
	if (newWord.length != 5) {
		generateWord();
	}
	console.log(newWord);
}

export default newWord;