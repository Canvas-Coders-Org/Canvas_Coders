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

            <div className="iframe-wrapper" style={{ paddingBottom: "56.25%", position: "relative" }}>
                <iframe src="https://codepen-app.vercel.app/codepen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>

            <section className="py-16 bg-gray-100 text-center">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Available Projects</h2>
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center mr-4">
                            <div className="w-80 h-80 relative">
                                <img src="https://media.giphy.com/media/3o72F8803duCphcbMA/giphy.gif" alt="Gallery Image 1" className="rounded-lg w-full h-full object-cover" />
                            </div>
                            <p className="text-lg font-bold mt-4">Project 1</p>
                            <button className="bg-C8B49F hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">View Project</button>
                        </div>
                        <div className="flex flex-col items-center ml-4">
                            <div className="w-80 h-80 relative">
                                <img src="https://media.giphy.com/media/c8ygOpL64UDuw/giphy.gif" alt="Gallery Image 2" className="rounded-lg w-full h-full object-cover" />
                            </div>
                            <p className="text-lg font-bold mt-4">Project 2</p>
                            <button className="bg-C8B49F hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">View Project</button>
                        </div>
                        <div className="flex flex-col items-center mx-4">
                            <div className="w-80 h-80 relative">
                                <img src="https://media.giphy.com/media/WBhHWsSZVti0M/giphy.gif" alt="Gallery Image 3" className="rounded-lg w-full h-full object-cover" />
                            </div>
                            <p className="text-lg font-bold mt-4">Project 3</p>
                            <button className="bg-C8B49F hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">View Project</button>
                        </div>
                    </div>
                </div>
            </section>


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
