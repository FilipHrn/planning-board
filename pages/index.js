import Head from 'next/head'
import Header from '../components/Header/Header.jsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Planning Board - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        
      </main>

      <footer>
        
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
