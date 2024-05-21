import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed flex flex-row justify-between items-center p-4 rounded-xl min-h-20 min-w-64 w-2/4 bg-gradient-to-b from-blue-800">
            <Link className="text-blue-600 text-xl hover:text-blue-300 hover:shadow-sm hover:shadow-blue-500" href="/">Home</Link>
            <Link className="text-blue-600 text-xl hover:text-blue-300 hover:shadow-sm hover:shadow-blue-500" href="/about">About</Link>
            <Link className="text-blue-600 text-xl hover:text-blue-300 hover:shadow-sm hover:shadow-blue-500" href="/forums">Forums</Link>
        </header>
    );
}