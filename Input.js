import React from 'react';

const Input = () => {
  const handleChange = (e) => {
    e.preventDefault();
    console.log('Hi');
  };

  return (
    <form>
      <input type="text" placeholder="Add task" />
      <button type="submit" onClick={handleChange}>Add</button>
    </form>
  );
};

export default Input;
