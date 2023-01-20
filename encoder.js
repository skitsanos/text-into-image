/**
 * Encoder utilities, just for sake fo the demo
 * @author skitsanos, https://github.com/skitsanos
 */


const stringToHexArray = (str, separator = '') =>
{
    const hexArray = [];
    for (let i = 0; i < str.length; i++)
    {
        hexArray.push(str.charCodeAt(i).toString(16));
    }
    return hexArray.join(separator);
};

const binToChar = binary => String.fromCharCode(parseInt(binary, 2));
const charToBin = char =>
{
    const charCode = char.charCodeAt(0);
    let binary = charCode.toString(2);
    while (binary.length < 8)
    {
        binary = '0' + binary;
    }
    return binary;
};

const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    ' ': ' '
};

const morseEncode = text =>
{
    let morseText = '';
    text = text.toLowerCase();
    for (const element of text)
    {
        morseText += morseCode[element] + ' ';
    }
    return morseText;
};

const morseDecode = morse =>
{
    const words = morse.split('  ');
    let decoded = '';
    for (const element of words)
    {
        const letters = element.split(' ');
        for (const element of letters)
        {
            for (const char in morseCode)
            {
                if (morseCode[char] === element)
                {
                    decoded += char;
                }
            }
        }
        decoded += ' ';
    }
    return decoded.trim();
};

const text = 'hello world';
const morseEncodedText = morseEncode(text);
const hexArray = stringToHexArray(morseEncodedText);

console.log('original :', text);
console.log('encoded  :', morseEncodedText);
console.log('decoded  :', morseDecode(morseEncodedText));
console.log('hex      :', hexArray);