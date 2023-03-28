import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      console.log('Form submitted successfully');
      setIsSubmitted(true);
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
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-4 bg-green-100 rounded"
          >
            <p className="text-green-700 font-semibold">Thank you for your message!</p>
            <p className="text-gray-600">I will get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <motion.form onSubmit={handleSubmit} className="bg-gray-100 rounded p-4">
            <div className="my-2">
              <label htmlFor="name" className="block font-bold text-gray-700 mb-2">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border border-gray-400 p-2 w-full ${errors.name && 'border-red-500'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>
            <div className="my-2">
              <label htmlFor="email" className="block font-bold text-gray-700 mb-2">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border border-gray-400 p-2 w-full ${errors.email && 'border-red-500'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileFocus={{ borderColor: '#6366F1' }}
              />
              {errors.email && (
                <motion.p
                  className="text-red-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
            <div className="my-2">
              <label htmlFor="message" className="block font-bold text-gray-700 mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`border border-gray-400 p-2 w-full h-24 ${errors.message && 'border-red-500'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileFocus={{ borderColor: '#6366F1' }}
              ></motion.textarea>
              {errors.message && (
                <motion.p
                  className="text-red-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <motion.button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </motion.form>
        )}
        {isSubmitted && (
          <motion.div
            className="my-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-green-500">Thank you for your submission!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;