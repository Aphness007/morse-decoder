const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array = [];
    expr.match(/.{1,10}/g).forEach(el => {
        array.push(el.replace(/10/g,'.')
        .replace(/11/g,'-')
        .replace(/0/g,''));
    });

    for(let key in MORSE_TABLE){
        // console.log(key)
        // console.log(MORSE_TABLE[key]);
        for(let i = 0; i < array.length; i++){
            if(key == array[i]){
                array[i] = MORSE_TABLE[key];
            }
        }
    }

    
    return array.join('').replaceAll('**********',' ');
}

module.exports = {
    decode
}