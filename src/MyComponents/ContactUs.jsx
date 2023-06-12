import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mrvee4c', 'template_pyzbfon', e.target, 'qcc9pBN0jP8x02hRV')
      .then(() => {
        console.log('Email sent successfully');
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const sectionStyle = {
    backgroundColor: '#FF9BCA',
    backgroundImage: 'linear-gradient(to bottom right, #FF9BCA, #FFD3A5, #FFEAC8)',
    padding: '80px 0',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '16px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#FFFFFF',
    marginBottom: '24px',
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '4px',
    border: 'none',
    padding: '12px',
    marginBottom: '16px',
    fontSize: '16px',
    color: '#333333',
  };

  const buttonStyle = {
    backgroundColor: '#FF80C9',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '14px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const messageStyle = {
    fontSize: '18px',
    color: '#FFFFFF',
  };

  return (
    <section style={sectionStyle}>
      <div style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={paragraphStyle}>
          Any doubt <i className="bi bi-arrow-down-square-fill ms-1"></i>
        </p>
        <p style={paragraphStyle}>
        We would love to hear from you! If you have any questions, feedback, or inquiries, please use the form below to get in touch with us. Our team will get back to you as soon as possible..
        </p>
       
      </div>
      {!isSubmitted && (
        <div style={{ margin: '0 auto', maxWidth: '400px', marginTop: '40px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                placeholder="Name"
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="Email"
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ ...inputStyle, height: '120px' }}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" style={buttonStyle}>
                Contact Us
              </button>
              <h2>
                
              </h2>
            </div>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div style={{ margin: '0 auto', maxWidth: '400px', marginTop: '40px' }}>
          <p style={messageStyle}>Message Sent! We will contact you soon.</p>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
