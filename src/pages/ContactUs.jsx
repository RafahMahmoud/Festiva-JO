

import { useState } from 'react';
import './ContactUs.css'; // استيراد CSS الخاص بالصفحة
import { db } from '../firebase-config/firebase';
import { ref, push, set } from 'firebase/database';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      name: name,
      email: email,
      message: message,
      isDeleted: false,
      timestamp: Date.now()
    };

    try {
      const messageListRef = ref(db, 'messages');
      const newMessageRef = push(messageListRef);
      await set(newMessageRef, newMessage);

      setStatus('Message sent successfully');
    } catch (error) {
      setStatus(`Error:${error.message}`);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <NavBar/>
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h1 >Contact Us</h1>
        <input
          type="text"
          id="firstName"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <h4>Type Your Message Here...</h4>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Send" id="button" />
        {status && <p>{status}</p>}
      </form>

    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;