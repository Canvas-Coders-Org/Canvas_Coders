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
                <nav className="flex items-center justify-between p-4 shadow-md">
                     <Web3Address />
                     <Link href="/demo">
                         <a className="text-lg font-light rounded-2xl">Launch App</a>
                     </Link>
                     <Link href="https://github.com/Canvas-Coders-Org">
                         <a className="text-lg font-light rounded-2xl">Source Code</a>
                     </Link>
                     <Link href="/about">
                         <a className="text-lg font-light">About</a>
                     </Link>
                     <Web3Button />
                 </nav>
            </header>

            <section className="py-16 text-center hero-blur">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Collaborative Editor with Codesandbox</h2>
                    <h3 className="text-xl font-light mb-16">Code together here. Based on &nbsp;
                        <a href="https://wiki.invisible.college">https://wiki.invisible.college</a> and <a href="https://braid.news">Braidjs</a>.
                    </h3>
                    <h3>
                        Sketch by <a href="https://wove.pages.dev">https://wove.pages.dev</a>
                    </h3>

                    <div id="editorContainer">
                        <iframe
                            id="editorFrame"
                            style={{height: '1000px', width: '100%'}}
                            //onLoad={() => {}}
                            //ref={this.iframeRef}
                            src="/editor.html"
                            title="Collaborative Editor"
                        />
                        <iframe
                            id="sketchFrame"
                            style={{height: '500px', width: '500px'}}
                            //onLoad={() => {}}
                            //ref={this.iframeRef}
                            src="/sketch.html"
                            title="p5 Render"
                        />
                    </div>
                    <img src="https://user-images.githubusercontent.com/100870737/229333619-4e163e72-496f-450b-9982-b0dc8d586a09.gif" />
                </div>
            </section>
            
        </div>
    )
}

export default Home;
