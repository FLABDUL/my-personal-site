import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }

    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thanks for reaching out, {name}! 🚀</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Message:</label><br />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
