import { Link } from 'react-router-dom'

interface NavItemProps {
  texto: string;
  ruta: string;
}

function NavItem({ texto, ruta }: NavItemProps) {
  return (
    <Link className="nav-link" to={ruta}>
      {texto}
    </Link>
  )
}

export default NavItem
