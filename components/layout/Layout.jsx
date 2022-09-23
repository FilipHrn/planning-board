import Header from "./header/Header"
import Footer from "./footer/Footer"

function Layout({ children }) {
  return (
    <div id="container" className="flex flex-col h-screen bg-gray-100">
      <Header />

      <main className="shadow m-6 p-6 rounded-lg bg-white mb-auto">
        { children }
      </main>

      <Footer />
    </div>
  )
}
export default Layout