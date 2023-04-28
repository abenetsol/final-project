import emailjs from 'emailjs-com';
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_u0aunr5', 'template_6p41k8m', event.target, 'mdgqmPhZc3td3JZJu26jj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });}
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" required />
          <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      );

}
 export default ContactForm;