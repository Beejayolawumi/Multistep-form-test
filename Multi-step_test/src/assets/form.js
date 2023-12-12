import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import React, { useState } from 'react';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const change = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <label>
              First Name:
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type='button' onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <label>
              Email:
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type='button' onClick={prevStep}>
              Previous
            </button>
            <button type='submit'>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
