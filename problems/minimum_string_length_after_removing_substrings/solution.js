/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s, sum=0) {
    
  const reg = /(AB)|(CD)/g;
  if (!s.match(reg)) {
    if (sum===0){
      return s.length
    }
    return s.length;
  }
  
  const newStr = s.replace(reg, "");

  return minLength(newStr, sum);


};
