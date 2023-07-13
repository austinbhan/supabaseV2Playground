import PersonaListComponent from './PListComponent';

export default function PList({ books }) {
  return (
    <div>
      <h4>Personal List</h4>
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
