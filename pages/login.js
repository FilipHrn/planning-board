import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Form from '../components/form/Form'
import Link from 'next/link'

function Login() {
  return (
    <>
      <Head>
        <title>Planning Board - Login</title>
      </Head>

      <Layout>
        <section>
          <h1 className="text-center">Login</h1>

          <Form />

          <p className="text-center">Not a user? <Link href="/register">Register</Link></p>
        </section>
      </Layout>


    </>
  )
}
export default Login