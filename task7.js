function checkInt(num) {
  if (!Number.isInt(num)) {
    throw new Error('Введенное значение не является целым числом.');
  }
  console.log(` ${num} является целым числом.`);
}
try {
  checkInt(10.5);
} catch (error) {
  console.error(error.message);
}