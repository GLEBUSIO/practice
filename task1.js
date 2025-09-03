'use strict'


var a = 1;

function fact(a)
{
    if (a<=1){
        
        return a
    }
  return fact(a-1) * a 
}



console.log(fact(a));