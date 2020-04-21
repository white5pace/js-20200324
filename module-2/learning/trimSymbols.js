/* Необходимо реализовать ф-цию "trimSymbols". Ф-ция принимает 2 аргумента:
    1. строку произвольной длинны
    2. число разрешенных одинаковых символов к-е расположены в строке подряд

Функция должна вернуть строку символов, удалив из нее все последовательные одинаковые символы к-е превышают заданное число. */ 

console.log(trimSymbols('xxx', 3));
console.log(trimSymbols('xxx', 2));
console.log(trimSymbols('xxx', 1));


console.log(trimSymbols('xxxaaaaab', 3));
console.log(trimSymbols('xxxaaaaa', 2));


function trimSymbols(symbols, maxRepeat) {
  let symbolsInArray = symbols.trim('');
  let currentCounter = 1;
  let trimedSymbols = [symbols[0]];

  for (let i = 1; i < symbolsInArray.length; i++) {
    let previousSymbol = symbolsInArray[i - 1]
    let currentSymbol = symbolsInArray[i];

    if (previousSymbol === currentSymbol) {
      if (currentCounter >= maxRepeat) { // maxRepeat = 1
        continue;                         
      }else { 
        trimedSymbols.push(currentSymbol);
        currentCounter++;
      }
    } else {
      currentCounter = 1;
      trimedSymbols.push(currentSymbol);
    }

  }
  return trimedSymbols.join('');

} 