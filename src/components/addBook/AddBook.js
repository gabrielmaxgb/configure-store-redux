import React, { useState } from 'react';

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("5");

  const addBookHandler = (e) => {
    e.preventDefault();
    // dispatch the action for adding a book
  }

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="number"
          min="1"
          max="10"
        />
      </div>
      <button
        onClick={(e) => addBookHandler(e)}
      >
        Add book
      </button>
    </form>
  );
}

export default Addbook;
