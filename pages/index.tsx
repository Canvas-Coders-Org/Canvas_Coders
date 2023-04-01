import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Web3Button, Web3Address } from '../components/'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>CANVAS CODERS</title>
                <meta name="description" content="Canvas Coders Educational Coding and Art Platform" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            </Head>

            <header className="fixed top-0 left-0 right-0 z-50">
                <nav className="flex items-center justify-between p-4 shadow-md bg-white">
                    <Web3Address />
                    <Link href="/about">
                        <a className="text-lg font-light">About</a>
                    </Link>
                    <Web3Button />
                </nav>
            </header>

            <main className="flex-grow p-8 text-center">
                <div className="max-w-screen-lg mx-auto">
                    <h1 className="pb-8 text-4xl font-bold" style={{ fontFamily: "Anton", color: "black", fontSize: "500%" }}>CANVAS CODERS</h1>
                    <p className="mt-8 text-lg font-bold" style={{ color: "#FFDE59", fontSize: "200%" }}>
                        <strong>Unleash Your Creativity through Code</strong>
                    </p>
                    <div className="mt-8">
                    </div>
                </div>
            </main>

            <iframe src="https://codepen-app.vercel.app/codepen" style={{ width: "100%", height: "calc(100vh - 100px)", border: "none" }} />

            <footer className="p-4">
                <div className="max-w-screen-lg mx-auto">
                    <p className="text-lg font-light">
                        CANVAS CODERS &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Home;
