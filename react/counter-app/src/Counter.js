import React, { useState } from 'react';

function Counter() {
  // Инициализируем состояние для счетчика с начальным значением 0
  const [count, setCount] = useState(0);

  // Определяем цвет кнопки в зависимости от значения счетчика
  // Если count > 10, цвет будет красным, иначе — зеленым
  const buttonColor = count > 10 ? 'red' : 'green';

  // Обработчик события для увеличения счетчика
  const increment = () => {
    // Обновляем состояние, увеличивая значение на 1
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Счетчик: {count}</h1>
      <button 
        onClick={increment}
        style={{ 
          backgroundColor: buttonColor,
          color: 'white',
          padding: '10px 20px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Увеличить на 1
      </button>
    </div>
  );
}

export default Counter;