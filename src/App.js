
import React from 'react';
import Form from './formComponent';

const App = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    surname: '',
    info: '',
    age: '',
    gender: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Form Data:</h1>
      <p>Name: {formData.name}</p>
      <p>Surname: {formData.surname}</p>
      <p>Info: {formData.info}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>

      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;

