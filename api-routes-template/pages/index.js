import { useState } from 'react';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const feedbackHandler = (event) => {
    event.preventDefault();

    const enteredEmail = event.target.email.value;
    const enteredFeedback = event.target.feedback.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>

      <form onSubmit={feedbackHandler}>
        <label htmlFor='email'>Your Email Address</label>
        <input type='text' name='email' />

        <label htmlFor='feedback'>Your Feedback</label>
        <textarea name='feedback' rows='5'></textarea>
        <button>Send Feedback</button>
      </form>

      <hr />

      <button type='button' onClick={loadFeedbackHandler}>
        Load feedback
      </button>

      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
