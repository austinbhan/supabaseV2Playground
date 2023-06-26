import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../services/fetch-utils';

export default function EditPage() {
  const [book, setBook] = useState({});
  const params = useParams();

  useEffect(() => {
    async function doFetch() {
      const data = await getBook(params.id);
      setBook(data);
    }
    doFetch();
  }, [params.id]);

  return (
    <div>
      <h2>This is the Edit Page</h2>
      <form>
          Book Title:  
        <input type="text" 
          placeholder={book.bookTitle}
        ></input> 
          Book Author: 
        <input type="text" 
          placeholder={book.bookAuthor}
        ></input>
          Book Year: 
        <input type="text" 
          placeholder={book.bookYear}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
