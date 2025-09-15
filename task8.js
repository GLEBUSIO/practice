 function runOperations(operations) {
  let promiseChain = Promise.resolve(); 

  operations.forEach(operation => {
    promiseChain = promiseChain.then(() => {
      console.log(`Старт: ${operation.name}`);
      return operation();
    });
  });

  return promiseChain;
}

const op1 = () => new Promise(resolve => setTimeout(() => {
  console.log('Операция 1 завершена!');
  resolve('результат 1 операции');
}, 1000));

const op2 = () => new Promise(resolve => setTimeout(() => {
  console.log('Операция 1 завершена!');
  resolve('результат 1 операции');
}, 500));

const op3 = () => new Promise((resolve, reject) => setTimeout(() => {
  console.log('Операция 1 завершена!');
  resolve('результат 1 операции');
}, 700));

const operations = [op1, op2, op3];

runOperations(operations)
  .then(() => {
    console.log('Все операции завершены успешно');
  })
  .catch(error => {
    console.error('Ошибка', error);
  });