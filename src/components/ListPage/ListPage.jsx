// The Entire List Page That Calls the Loop
import { ListData } from './ListData';
import List from './List';
import { useEffect } from 'react';
import { getBooks } from '../../services/fetch-utils';

export default function ListPage() {

  useEffect(() => {
    getBooks();
  });
  
  return (
    <div>
      <h2>This is the List Page</h2>
      <List ListData={ListData}/>
    </div>
  );
}
