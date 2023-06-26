import { getBook } from '../services/fetch-utils';

export default function EditPage() {
  
  getBook(27);
  
  return (
    <div>
      <h2>This is the Edit Page</h2>
      <form>
          Book Title:  
        <input type="text" 
          placeholder="Book Title"
        ></input> 
          
          Book Author: 
        <input type="text" 
          placeholder="Book Author"
        ></input>

          Book Year: 
        <input type="text" 
          placeholder="Book Year"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
