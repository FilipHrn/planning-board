import Logo from './partials/Logo'
import Navigation from './partials/Navigation'

const Header = () => {
  return (
    <header className="p-3 flex justify-between items-center shadow text-sm">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header