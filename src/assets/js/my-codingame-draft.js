
function secondIndexOf(str1, str2) {
  let i = str1.indexOf(str2);
  if (i <0) {
    return -1;
  }

  let newStr = str1.substring(i + str2.length);
  let idx2 = newStr.indexOf(str2);
  if (idx2 < 0) {
    return -1
  }
  return i + str2.length + idx2;
}



function firstWord(string) {
  let spaceIdx = string.indexOf(' ');
  return string.substring(0, spaceIdx);
}

function normalize(string) {
  dashIndex = string.indexOf('-');

  while (dashIndex > 0 && i<5) {
    string = string.replace('-', '/');
    dashIndex = string.indexOf('-');
  }

  return string;
}
