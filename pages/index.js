import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
      ).json();
      setBooks(results);
    })();
  }, []);

  const onClick = (id, genre) => {
    router.push(
      {
        pathname: `/list/${genre}`,
        query: {
          id, genre
        },
      },
      `/list/${genre}`
    );
  };

  return (
    <div className="container">
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <ul className="book-list">
        {books?.map((book) => (
          <li onClick={() => onClick(book.list_name_encoded, book.list_name)} className="book" key={book.list_name_encoded}>
            {book.list_name} →
          </li>
        ))}
      </ul>
      <style jsx>{`
      h1 {
        text-align: center;
      }

      ul {
        display: flex;
        width: 60%;
        flex-wrap: wrap;
        margin: 0 auto;
      }

      li {
        padding: 10px 20px;
        margin: 10px;
        border: 1px solid gray;
        list-style-type: none;
      }

      li:hover {
        cursor: pointer;
      }
      `}</style>
    </div>
  );
}
