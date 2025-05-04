import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/config/routes'

export default function Navigation() {
  return (
    <nav
    className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
        <span className='font-bold'>LDS</span>
        <span>
            <Link to="/">Products</Link>
            <Link to={ROUTES.about}>About</Link>
        </span>
    </nav>
  )
}
