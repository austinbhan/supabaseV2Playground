import { checkUserId, getPersonalBooks } from '../../services/fetch-utils';
import { useEffect, useState } from 'react';

// The Personal List that only shows personal entries
export default function PersonalList() {

  const [userId, setUserId] = useState('');

  useEffect(() => {

    
    async function checkUserCredential() {
      const id = await checkUserId();
      setUserId(id);
    } checkUserCredential();
  }, []);

  console.log(getPersonalBooks(userId)); // Correctly renders data


  return (
    <div>
      <h2>This is the Personal List Page</h2>
    </div>
  );
}
