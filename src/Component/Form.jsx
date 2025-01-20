import React, { useState } from 'react';
import './Form.css';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    let newStatus = { name: '', email: '', message: '' };
    let isValid = true;

    if (formData.name === '') {
      newStatus.name = 'Name is required';
      isValid = false;
    }

    if (formData.email === '') {
      newStatus.email = 'Email is required';
      isValid = false;
    }

    if (formData.message === '') {
      newStatus.message = 'Message is required';
      isValid = false;
    }

    setStatus(newStatus);

    if (isValid) {
      setSubmittedData(formData);
    }
  }

  return (
    <div className='main_box'>
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1><br />
        
        <label>Name</label>
        <input
          id='name'
          type="text"
          placeholder='Enter Your Name'
          value={formData.name}
          onChange={handleChange}
        />
        <p>{status.name}</p>

        <label>Email</label>
        <input
          id='email'
          type="email"
          placeholder='Enter Your Email'
          value={formData.email}
          onChange={handleChange}
        />
        <p>{status.email}</p>

        <label>Message</label>
        <textarea
          id='message'
          placeholder='Enter Your Message'
          value={formData.message}
          onChange={handleChange}
        />
        <p>{status.message}</p>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div id='container'>
          <h2>Submitted Data</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <div id='label_box'>
              <ul>
                <li style={{ color: 'orangered' }}>Name:</li>
                <li style={{ color: 'orangered' }}>Email:</li>
                <li style={{ color: 'orangered' }}>Message:</li>
              </ul>
            </div>
            <div id='data_box'>
              <ul>
                <li>{submittedData.name}</li>
                <li>{submittedData.email}</li>
                <li>{submittedData.message}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
