//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  //Adding various regexes to check various telephone number combinations
  const regexPattern= [ 
    /1\(\d{3}\)\d{3}-\d{4}/, 
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\d{3}-\d{3}-\d{4}$/, 
    /^\d{10}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/];
  
  console.log(regexPattern.some(regex=> regex.test(str)));
  return regexPattern.some(regex => regex.test(str));
}

telephoneCheck("555-555-5555");
