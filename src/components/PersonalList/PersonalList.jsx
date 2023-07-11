import { checkUserId, getPersonalBooks } from '../../services/fetch-utils';
import { useEffect, useState } from 'react';

// The Personal List that only shows personal entries
export default function PersonalList() {

  const [userId, setUserId] = useState('');
  const [books, setBooks] = useState('');


  useEffect(() => {
    async function checkUserCredential() {
      const id = await checkUserId();
      setUserId(id);
    } checkUserCredential();

    async function doFetch() {
      const data = await getPersonalBooks(userId); 
      // Above returns null. If userId is passed manually as string, works.
      setBooks(data);
    } doFetch();
    
  }, []);

  console.log(userId);


  return (
    <div>
    </div>
  );
}
