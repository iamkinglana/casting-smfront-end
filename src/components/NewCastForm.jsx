import React, { useState } from 'react';

function NewCastForm() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCast = {
      content: content,
    };

    fetch('http://localhost:3000/casts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCast),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response
        console.log(data);
        setContent('');
      })
      .catch((error) => {
        // Handle error response
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Cast</button>
    </form>
  );
}

export default NewCastForm;
