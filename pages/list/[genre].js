import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Detail() {
    const router = useRouter();
    const [dtbook, setDtbook] = useState([]);
    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${router.query.genre}`)
            ).json();
            setDtbook(results.books);
        })();
    }, []);

    console.log(dtbook);

    return (
        <>
            <div className='container'>
                <h1>{router.query.genre}</h1>
                <div className='book-list'>
                    {dtbook.map((d) => (
                        <div className="detail" key={d.primary_isbn13}>
                            <img src={d.book_image} />
                            <h2>{d.title}</h2>
                            <span>{d.author}</span>
                            <button>
                                <Link href={d?.amazon_product_url}>
                                    Buy now →
                                </Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
            .book-list {
                display: flex;
                flex-flow: wrap;
                margin: 0 5%;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
            .detail {
                background-color: whitesmoke;
                box-shadow: rgba(0,0,0,.1)0px 4px 12px;
                margin: 20px;
                width: 300px;
            }
            .detail img {
                max-width: 100%;
            }
            .detail button {
                display: block;
                margin: 0 auto;
                transition: transform 0.2s ease-in-out;
            }

            `}</style>
        </>
    );
}