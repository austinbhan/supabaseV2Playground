import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../services/fetch-utils';

export default function EditPage() {
  const [placeHolder, setPlaceHolder] = useState({});
  // const [newBook, setNewBook] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function doFetch() {
      const data = await getBook(params.id);
      setPlaceHolder(data);
    }
    doFetch();

    
  }, [params.id]);

  return (
    <div>
      <h2>This is the Edit Page</h2>
      <form>
          Book Title:  
        <input type="text" 
          placeholder={placeHolder.bookTitle}
        ></input> 
          Book Author: 
        <input type="text" 
          placeholder={placeHolder.bookAuthor}
        ></input>
          Book Year: 
        <input type="text" 
          placeholder={placeHolder.bookYear}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
