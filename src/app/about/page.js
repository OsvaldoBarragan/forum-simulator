import Link from 'next/link'

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="flex flex-row justify-between items-center p-8 min-h-32 min-w-64 w-2/4 bg-gradient-to-b from-blue-800">
                <Link className="text-blue-500" href="/">Home</Link>
                <Link className="text-blue-500" href="/about">About</Link>
                <Link className="text-blue-500" href="/forums">Forums</Link>
            </header>
            <h1>This is the about page that will explain what the purpose of this site is.</h1>
        </main>
    );
}