import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="border bg-primary-subtle">
        <h1>Questa è la Navbar!</h1>
        <nav>
          <ul className="list-unstyled d-flex">
            <li className="me-3">
              <NavLink to="/" className={
                ({isActive}) => isActive ? "fw-bold" : ""
                }>Homepage</NavLink>
            </li>
            <li className="me-3">
              <NavLink to="/about" className={
                ({isActive}) => isActive ? "fw-bold" : ""
                }>About</NavLink>
            </li>
            <li className="me-3">
              <NavLink to="/products" className={
                ({isActive}) => isActive ? "fw-bold" : ""
                }>Products</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar