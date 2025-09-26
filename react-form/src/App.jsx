import React, { useState } from 'react';
import './App.css';


function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log('Текущее значение поля:', inputValue);
  };

  return (
    <div className="simple-form"> 
      <h2>Введите данные</h2>
      <form onSubmit={handleSubmit}>
        
        
        <div className="form-group"> 
          <label htmlFor="simpleInput">Текст:</label>
          <input
            id="simpleInput"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ваш текст здесь..."
          />
        </div>

        
        <button type="submit">
          Вывести в консоль
        </button>
      </form>
      
      
      <p className="read-the-docs" style={{ marginTop: '20px' }}>
        Текущее значение: **{inputValue}**
      </p>
    </div>
  );
}


export default SimpleForm;