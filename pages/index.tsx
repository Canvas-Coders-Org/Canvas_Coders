import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Web3Button, Web3Address } from '../components/'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-screen" style={{ backgroundImage: "url('/Canvas_Coders_Background_Image.png')" }}>
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
                    <h1 className="pb-8 text-4xl font-bold" style={{ fontFamily: "Anton", color: "white", fontSize: "500%" }}>CANVAS CODERS</h1>
                    <p className="mt-8 text-lg font-bold" style={{ color: "#FFDE59", fontSize: "200%" }}>
                        <strong>Unleash Your Creativity through Code</strong>
                    </p>
                    <div className="mt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: "#ccb49c", fontSize: "200%" }}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </main>

            <section className="py-16 bg-gray-100 text-center">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Personalized Learning Tracks</h2>
                    <p className="text-xl font-light mb-16">Learning Tracks for Visual and Analytical Learners Alike</p>
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center mr-4">
                            <div className="w-80 h-80 relative">
                                <img src="/artist_track.jpg" alt="Gallery Image 1" className="rounded-lg w-full h-full object-cover" />
                            </div>
                            <p className="text-lg font-bold mt-4">Artist Track</p>
                        </div>
                        <div className="flex flex-col items-center ml-4">
                            <div className="w-80 h-80 relative">
                                <img src="/developer_track.jpg" alt="Gallery Image 2" className="rounded-lg w-full h-full object-cover" />
                            </div>
                            <p className="text-lg font-bold mt-4">Developer Track</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 text-center" style={{
                backgroundImage: "url('/pattern_background.jpg')",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-black">Experience our Platform</h2>
                    <p className="text-xl font-light mb-16 text-black font-bold">Try it out!</p>
                    <div className="mt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: "#ccb49c", fontSize: "200%" }}>
                            Demo Now
                        </button>
                    </div>
                </div>
            </section>
            
            <footer className="p-4 mt-auto">
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
