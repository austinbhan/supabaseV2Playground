import { useState } from 'react';
import { insertBook } from '../services/fetch-utils';

export default function CreatePage() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookYear, setBookYear] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await insertBook(bookTitle, bookAuthor, bookYear);
    setBookTitle('');
    setBookAuthor('');
    setBookYear('');
    window.location.replace('/listPage');
  }

  return (
    <div>
      <h2>This is the Create Page</h2>
      <form onSubmit={handleSubmit}>
          Book Title:  
        <input type="text" 
          placeholder="Book Title"
          value={bookTitle} 
          onChange={e => setBookTitle(e.target.value)}></input> 
          
          Book Author: 
        <input type="text" 
          placeholder="Book Author"
          value={bookAuthor} 
          onChange={e => setBookAuthor(e.target.value)}></input>

          Book Year: 
        <input type="text" 
          placeholder="Book Year"
          value={bookYear} 
          onChange={e => setBookYear(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
