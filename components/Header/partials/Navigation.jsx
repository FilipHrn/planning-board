import Link from 'next/link';

function Navigation() {

  return (
    <nav>
      <ul className="flex space-x-3">
        <li><Link className="text-gray-400" href="/">Home</Link></li>
        <li><Link className="text-gray-400" href="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation