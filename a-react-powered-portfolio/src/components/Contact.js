import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFields();
    if (Object.keys(errors).length === 0) {
      // handle form submission here
      console.log('Form submitted successfully');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="my-4">
      <div className="my-2">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="name" className="block font-bold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border border-gray-400 p-2 w-full ${errors.name && 'border-red-500'}`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="my-2">
            <label htmlFor="email" className="block font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border border-gray-400 p-2 w-full ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="my-2">
            <label htmlFor="message" className="block font-bold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`border border-gray-400 p-2 w-full h-24 ${errors.message && 'border-red-500'}`}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
