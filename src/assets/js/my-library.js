function helloDraft() {
  console.log('Hello draft!');
}



function encode(plainText) {
  let charArray = plainText.split('');

  let encodedText = '';

  let c = charArray[0];
  let count = 1;
  for (let i = 1; i < charArray.length; i++) {
    if (charArray[i] != c) {
      encodedText += count + c;
      c= charArray[i];
      count = 1;
    } else {
      count++;
    }
  }

  encodedText += count;
  encodedText += c;
  count = 1;

  return encodedText;
}





function computeMultiplesSum(n) {
  let somme = 0;
  for (let i = 1; i < n; i++) {
    if ((i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)) {
      somme += i;
    }
  }

  return somme;
}

