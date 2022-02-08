import React from "react";

const Form = ({ input, setInput, todo, setTodo }) => {
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Enter todo'
          value={input}
          required
          className='task-input'
          onChange={changeInput}
        />
        <button className='btn btn-primary' type='add'>
          add
        </button>
      </form>
    </div>
  );
};

export default Form;
