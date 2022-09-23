import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="p-3 flex justify-between items-center shadow text-sm bg-white">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header