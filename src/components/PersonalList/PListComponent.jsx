export default function PersonaListComponent({ 
  bookTitle, 
  bookAuthor, 
  bookYear }) {
  return (
    <div>
      <p>{bookTitle}</p>
      <p>{bookAuthor}</p>
      <p>{bookYear}</p>
    </div>
  );
}
