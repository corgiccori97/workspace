import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a>About</a>
            </Link>
            <style jsx>{`
            nav {
                display:flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding:20px;
            }
            `}</style>
        </nav>
    );
}