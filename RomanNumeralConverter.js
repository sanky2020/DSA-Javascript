//Convert the given number into a roman numeral.

function convertToRoman(num) {
    let newarr=[]
    let finalArr=[]
    let a = num.toString().split("")
    let temp = ""
    for(let i=0; i<a.length; i++){
      newarr.push(a[i]*Math.pow(10,a.length-1-i))
    }
    console.log(newarr)
    
    let obj = {
      1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',
      20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC',
      100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',1000:'M'
    }
    
    newarr.forEach(item=>{
        // console.log(item)
      if(item>=1000){
        let multiple = item/1000;
        
        for(let i=0; i<multiple;i++){
          temp+=obj[1000];
        }
        finalArr.push(temp);
      }
      else{
          finalArr.push(obj[item])
      }
    })
    console.log(finalArr.join().replaceAll(',',''))
    return finalArr.join().replaceAll(',','');
   }
   
   convertToRoman(3999);
