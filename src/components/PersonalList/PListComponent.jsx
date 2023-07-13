export default function PersonaListComponent({ 
  bookTitle, 
  bookAuthor, 
  bookYear }) {
  return (
    <div>
      <ul>
        <li>{bookTitle}</li>
        <li>{bookAuthor}</li>
        <li>{bookYear}</li>
      </ul>
    </div>
  );
}
