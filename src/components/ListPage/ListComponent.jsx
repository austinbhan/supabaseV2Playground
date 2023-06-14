// A Singular List Component

export default function ListComponent({ id, bookTitle, bookAuthor, bookYear }) {
  return (
    <div>
      <h3>{id}</h3>
      <ul>
        <li>{bookTitle}</li>
        <li>{bookAuthor}</li>
        <li>{bookYear}</li>
      </ul>
    </div>
  );
}
