import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: input, completed: false }]);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type='text'
          placeholder='Enter todo'
          value={input}
          required
          className='task-input'
          onChange={changeInput}
        />
        <button className='btn btn-primary' type='submit'>
          add
        </button>
      </form>
    </div>
  );
};

export default Form;
