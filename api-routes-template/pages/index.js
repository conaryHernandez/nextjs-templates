function HomePage() {
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
    </div>
  );
}

export default HomePage;
