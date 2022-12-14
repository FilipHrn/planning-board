import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Planning Board - Home</title>
      </Head>

      <Layout>
        Home Page
      </Layout>

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
