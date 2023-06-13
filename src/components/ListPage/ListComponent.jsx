// A Singular List Component

export default function ListComponent({ bookTitle, bookAuthor, bookYear }) {
  return (
    <ul>
      <li>{bookTitle}</li>
      <li>{bookAuthor}</li>
      <li>{bookYear}</li>
    </ul>
  );
}
