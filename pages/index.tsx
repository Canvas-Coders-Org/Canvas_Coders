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
            </Head>

            <header className="fixed top-0 left-0 right-0 z-50">
                <nav className="flex items-center justify-between p-4 shadow-md bg-white">
                     <Web3Address />
                     <Link href="/demo">
                         <a className="text-lg font-light rounded-2xl">Launch App</a>
                     </Link>
                     <Link href="/about">
                         <a className="text-lg font-light">About</a>
                     </Link>
                     <Web3Button />
                 </nav>
            </header>

            <section className="py-16 bg-gray-100 text-center">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Collaborative Editor with Codesandbox</h2>
                    <p className="text-xl font-light mb-16">Code together here. Based on &nbsp;
                        <a href="https://wiki.invisible.college">https://wiki.invisible.college</a> and <a href="https://braid.news">Braidjs</a>.
                    </p>

                    <iframe
                        style={{height: '1000px', width: '100%'}}
                        //onLoad={() => {}}
                        //ref={this.iframeRef}
                        src="/editor.html"
                        title="Collaborative Editor"
                />
                </div>
            </section>
            
        </div>
    )
}

export default Home;
