import React, { useState } from 'react';

function DynamicForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      // Assuming 'adddata' is a function to add form data
      adddata(formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } else {
      alert('Please fill out all fields!');
    }
  };

  // Placeholder function for adding form data
  const adddata = (data) => {
    console.log('Adding data:', data);
    // Implement your logic to add data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <button className='btn btn-sn btn-danger' type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
