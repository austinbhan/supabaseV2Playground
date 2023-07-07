// The Loop Component
import ListComponent from './ListComponent';

export default function List({ ListData }) {
  return (
    <div>
      {
        ListData.map((ListItem, i) => (
          <ListComponent 
            {...ListItem}
            key={ListItem.id + i}
          />
        ))
      }
    </div>
  );
}
