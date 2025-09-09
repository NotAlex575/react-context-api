import { NavLink } from "react-router-dom"
import { BudgetContext } from "../context/BudgetContext"
import { useContext } from "react"

const Navbar = () => {
  const {budgetMode, setBudgetMode} = useContext(BudgetContext)

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
          <button className="btn btn-info" onClick={() => setBudgetMode(!budgetMode)}>
            {budgetMode ? "disattiva budget mode" : "attiva budget mode"}
          </button>
        </nav>
    </header>
  )
}

export default Navbar