import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Form from '../components/form/Form'
import Link from 'next/link'

function Register() {
  return (
    <>
      <Head>
        <title>Planning Board - Register</title>
      </Head>

      <Layout>
        <section>
          <h1 className="text-center">Register</h1>

          <Form reg />

          <p className="text-center">Have a user? <Link href="/login">Login</Link></p>
        </section>
      </Layout>


    </>
  )
}

export default Register