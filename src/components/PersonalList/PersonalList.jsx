import { checkUserId, getPersonalBooks } from '../../services/fetch-utils';
import { useEffect, useState } from 'react';

// The Personal List that only shows personal entries
export default function PersonalList() {

  const [userId, setUserId] = useState('');
  const [books, setBooks] = useState([]);
  
  async function checkUserCredential() {
    const id = await checkUserId();
    setUserId(id);
  } 
  
  async function getStuff() {
    const bookData = await getPersonalBooks(userId);
    setBooks(bookData); 
  }  
  
  useEffect(() => {
    checkUserCredential();
    if (userId !== '') {
      getStuff();
    }
  }, [userId]);
  
  console.log(books);

  
  
  // IDEAS
  // If outside useEffect, will fetch data, but in infinite loops
  // If inside useEffect, will stop on first attempt

  // if books != null, stop 


  return (
    <div>
    </div>
  );
}
