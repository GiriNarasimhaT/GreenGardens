import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting. We will get back to you soon.");
    }

    return (
        <div className='contact-content'>
            <h1 className='section-title'>Contact Us</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleChange} value={formData.name} required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={handleChange} value={formData.email} required/>
                    </label>
                    <label>
                        Message:
                        <textarea name="message" onChange={handleChange} value={formData.message} required></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;