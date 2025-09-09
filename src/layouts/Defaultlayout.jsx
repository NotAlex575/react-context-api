import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const Defaultlayout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
  )
}

export default Defaultlayout