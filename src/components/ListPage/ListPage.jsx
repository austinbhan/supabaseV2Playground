// The Entire List Page That Calls the Loop
import List from './List';
import { useState, useEffect } from 'react';
import { getBooks } from '../../services/fetch-utils';
import { Link } from 'react-router-dom';

export default function ListPage() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const bookData = await getBooks();
      setBookData(bookData);
    }
    doFetch();
  }, []);

  return (
    <div>
      <h2>This is the List Page</h2>
      <List ListData={bookData}/>
      <Link to="/createPage">Create Page</Link>
    </div>
  );
}
