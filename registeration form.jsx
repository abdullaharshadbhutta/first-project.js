import React, { useState } from 'react';

const RegistrationForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    country: '',
    accepted: false,
  });

  const [output, setOutput] = useState(null);

  const updateInput = ({ target }) => {
    const { name, value, type, checked } = target;
    setInput(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = () => {
    const { name, email, age, gender, country, accepted } = input;
    if (!name || !email || !age || !gender || !country || !accepted) {
      alert('All fields are required, including agreement to terms.');
      return;
    }
    setOutput(input);
  };

  const resetForm = () => {
    setInput({
      name: '',
      email: '',
      age: '',
      gender: '',
      country: '',
      accepted: false,
    });
    setOutput(null);
  };

  return (
    <div style={{ width: '500px', margin: '30px auto', fontFamily: 'Arial' }}>
      {!output ? (
        <>
          <h2>Register Here</h2>
          <label>Full Name: 
            <input name="name" type="text" value={input.name} onChange={updateInput} />
          </label><br /><br />

          <label>Email: 
            <input name="email" type="email" value={input.email} onChange={updateInput} />
          </label><br /><br />

          <label>Age: 
            <input name="age" type="number" value={input.age} onChange={updateInput} />
          </label><br /><br />

          <label>Gender:</label><br />
          <label>
            <input type="radio" name="gender" value="Male" checked={input.gender === 'Male'} onChange={updateInput} />
            Male
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input type="radio" name="gender" value="Female" checked={input.gender === 'Female'} onChange={updateInput} />
            Female
          </label><br /><br />

          <label>Country: 
            <select name="country" value={input.country} onChange={updateInput}>
              <option value="">Choose</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </label><br /><br />

          <label>
            <input type="checkbox" name="accepted" checked={input.accepted} onChange={updateInput} />
            I accept the terms
          </label><br /><br />

          <button onClick={handleFormSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>Submitted Info</h2>
          <table border="1" cellPadding="8" cellSpacing="0">
            <tbody>
              <tr><td>Name</td><td>{output.name}</td></tr>
              <tr><td>Email</td><td>{output.email}</td></tr>
              <tr><td>Age</td><td>{output.age}</td></tr>
              <tr><td>Gender</td><td>{output.gender}</td></tr>
              <tr><td>Country</td><td>{output.country}</td></tr>
              <tr><td>Terms Accepted</td><td>{output.accepted ? 'Yes' : 'No'}</td></tr>
            </tbody>
          </table><br />
          <button onClick={resetForm}>Fill Again</button>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
