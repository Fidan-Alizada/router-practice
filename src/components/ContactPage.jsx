import React from 'react';
import './contact.css';
import Layout from './Layout/Layout';
const Contact = ({setRoute}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Form submitted');
  };

  return (

      <Layout className="container">
        <div className="contact-content">
          <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
              We would love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
              <p>Email: <a href="mailto:info@test.com">info@test.com</a></p>
              <p>Phone: +994 (123)-456-78-90</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
          </div>
          <div className="image-container">
            <img className='image2'
              src="https://www.talktotrevor.co.za/wp-content/uploads/2015/11/Contact-Us-PNG.png"
              alt="Business Statistics"
          
            />
          </div>
        </div>
      </Layout>

  );
};

export default Contact;

