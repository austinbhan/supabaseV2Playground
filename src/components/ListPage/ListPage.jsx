// The Entire List Page That Calls the Loop
import { ListData } from './ListData';
import List from './List';

export default function ListPage() {
  return (
    <div>
      <h2>This is the List Page</h2>
      <List ListData={ListData}/>
    </div>
  );
}
