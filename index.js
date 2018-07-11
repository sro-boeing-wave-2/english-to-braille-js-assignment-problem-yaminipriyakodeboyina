/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const m = new Map(englishToBrailleLiteralSet);

function respond() {
  const input = document.getElementById('sourceLangText').value;
  const array = input.split('');
  const str = array.map(x => m.get(x)).join('');
  document.getElementById('targetLangText').innerHTML = str;
}


document.getElementById('btnConvertEnglishToBraille').addEventListener('click', respond);
