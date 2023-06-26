import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../services/fetch-utils';
import { updateBook } from '../services/fetch-utils';

export default function EditPage() {
  const [placeHolder, setPlaceHolder] = useState({});
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newYear, setNewYear] = useState('');
  const params = useParams();

  useEffect(() => {
    async function doFetch() {
      const data = await getBook(params.id);
      setPlaceHolder(data);
    }
    doFetch();
  }, [params.id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await updateBook({ id: params.id, 
      title: newTitle,
      author: newAuthor,
      year: newYear });
    window.location.replace('/listPage');
  }

  return (
    <div>
      <h2>This is the Edit Page</h2>
      <form onSubmit={handleUpdate}>
          Book Title:  
        <input type="text" 
          placeholder={placeHolder.bookTitle}
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        ></input> 
        Book Author: 
        <input type="text" 
          placeholder={placeHolder.bookAuthor}
          value={newAuthor}
          onChange={e => setNewAuthor(e.target.value)}
        ></input>
          Book Year: 
        <input type="text" 
          placeholder={placeHolder.bookYear}
          value={newYear}
          onChange={e => setNewYear(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
