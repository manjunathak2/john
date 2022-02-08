import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <div className='container'>
      <div className='app-wraper'>
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
