import PersonaListComponent from './PListComponent';

export default function PList({ books }) {
  return (
    <div>
      <h4>This is the list</h4>
      {
        books.map((book, i) => (
          <PersonaListComponent
            {...book}
            key={book.id + i}
          />
        ))
      }
    </div>
  );
}
