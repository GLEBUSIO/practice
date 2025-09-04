const book1 = {

  title: 'Война и мир',
  author: {name: 'Володя', age: 22},
  pages: 1274,
  isFinished: true
}
const book2 = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  bestPages: [12, 13, 14],
  pages: 1274,
  isFinished: true
}
function isEqual(book1, book2) 
{
  const type1 = typeof book1;
  const type2 = typeof book2;
  if(type1 !== 'object' || type2 !== 'object' || book1 === null || book2 === null){
    return book1===book2
  }
 
  const keys1 = Object.keys(book1)
  const keys2 = Object.keys(book2)

  if(keys1.length !== keys2.length){
    return false;
  }

  for(key of keys1){
    if(!keys2.includes(key) || !isEqual(book1[key], book2[key])){
       return false;

  }
  return true;
}
}

isEqual(book1, book2)
console.log(isEqual(book1,book2));