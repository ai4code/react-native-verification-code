import Modes from './config';
import Transform from './tranform';
 
 //create 26 letters
function createLetters () {
    let lettersUpper = []
    let lettersLower = []
    for (let i = 0; i < 26; i++) {
        lettersUpper.push(String.fromCharCode(65+i))
        lettersLower.push(String.fromCharCode(97+i))
    }
    return [
        ...lettersLower,
        ...lettersUpper
    ];
}

//create verification code
function randomCode(mode, length) {
    const code = [];
    if (
        mode === Modes[0]
    ) { //letter
        const letters = createLetters();
        for(let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * letters.length);
            code.push(letters[index]);
        }
    } else if (
        mode === Modes[1]
    ) { //number
      const _number = new Array(10).fill(1).map((v, k) => k);
      for(let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * _number.length);
        code.push(_number[index]);
      }
    }
    return code;
}

//random text color
function randomTextColor() {
    const r = parseInt(Math.random() * 256);
    const g = parseInt(Math.random() * 256);
    const b = parseInt(Math.random() * 256); 
    return {
        color: `rgb(${r},${g},${b})`
    }
}

//create text style
function createTextStyle() {
    let index = Math.floor(Math.random() * Transform.length); 
    let color = arguments[0] ? randomTextColor() : null; 
    return { 
        ...color,
        transform: [Transform[index]]
    }
}


//create container style
function createContainerStyle() {
    const bgColor = arguments[0] ? 
     new Array(
        randomTextColor().color,
        randomTextColor().color,
        randomTextColor().color
    ) : ['#fff','#ddd','#000']
   return bgColor; 
} 

export default {
    randomCode,
    createTextStyle,
    createContainerStyle
}