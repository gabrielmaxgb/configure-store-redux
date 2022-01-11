import React from 'react';
import { useSelector } from 'react-redux';

const Library = () => {
  const books = useSelector(state => state.books.books);

  const deleteBookHandler = (id) => {
    // dispatch the delete book hadler from here
  };

  const booksTable = books.map(book => {
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <td>
        <button className="delete" onClick={() => deleteBookHandler(book.id)}>
          x
        </button>
      </td>
    </tr>
  })

  return (
    <div>
      <h2>Library</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dune</td>
            <td>F. Robert</td>
            <td>10</td>
            <td>
              <button
                className="delete"
                onClick={() => deleteBookHandler()}
              >
                x
              </button>
            </td>
          </tr>
          {booksTable}
        </tbody>
      </table>
    </div>
  );
}

export default Library;
