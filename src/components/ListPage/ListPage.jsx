// The Entire List Page That Calls the Loop
import { ListData } from './ListData';
import List from './List';

export default function ListPage() {
  return (
    <div>
      <List ListData={ListData}/>
    </div>
  );
}
