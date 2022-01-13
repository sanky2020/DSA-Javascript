//check value if its between 65 - 90 (according to ASCII Table)
//values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on. (spaces, punctuations & symbols are passed-on as it is)

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

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.:)!!"); 

//Output=> THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.:)!!

