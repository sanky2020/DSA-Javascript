function rot13(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let num = 0;
    let ASCII = str.charCodeAt(i);
    // console.log(ASCII);
    if (ASCII >= 65 && ASCII <= 90) {
      if (ASCII <= 77) {
        num = ASCII + 13;
        newStr += String.fromCharCode(num);
      } else {
        num = ASCII - 13;
        newStr += String.fromCharCode(num);
      }
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC??");
//check value if its between 65 - 90 (according to ASCII Table)
