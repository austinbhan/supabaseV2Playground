import { useState } from 'react';
import { deleteBook } from '../../services/fetch-utils';

export default function PersonaListComponent({ 
  id,
  bookTitle, 
  bookAuthor, 
  bookYear }) {

  const [remove, setRemove] = useState('');

  async function handleDelete(e) {
    e.preventDefault();
    await deleteBook(remove);
    window.location.replace('/listPage');
  }

  function handleEditLink() {
    window.location.replace(`/editPage/${id}`);
  }

  return (
    <div>
      <form onSubmit={handleDelete}>
        <ul>
          <li>{bookTitle}</li>
          <li>{bookAuthor}</li>
          <li>{bookYear}</li>
        </ul>
        <button value={id} 
          onClick={e => setRemove(e.target.value)}>
            Delete {bookTitle}</button>
      </form>
      <button onClick={handleEditLink}>Edit {bookTitle}</button>
    </div>
  );
}
