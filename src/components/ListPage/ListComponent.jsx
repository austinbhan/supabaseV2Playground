// A Singular List Component
import { deleteBook } from '../../services/fetch-utils';
import { useState } from 'react';

export default function ListComponent({ id, bookTitle, bookAuthor, bookYear }) {
  const [remove, setRemove] = useState('');

  function handleDelete(e) {
    e.preventDefault();
    deleteBook(remove);
  }

  return (
    <div>
      <form onSubmit={handleDelete}>
        <h3>{id}</h3>
        <ul>
          <li>{bookTitle}</li>
          <li>{bookAuthor}</li>
          <li>{bookYear}</li>
        </ul>
        <button value={id} 
          onClick={e => setRemove(e.target.value)}>
            Delete {bookTitle}</button>
      </form>
    </div>
  );
}
