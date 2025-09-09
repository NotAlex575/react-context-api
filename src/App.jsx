import About from "./pages/About"
import Homepage from "./pages/Homepage"
import Products from "./pages/Products"
import ProductSingle from "./pages/ProductSingle"
import Defaultlayout from "./layouts/Defaultlayout"
import { BudgetProvider } from "./context/BudgetContext"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Defaultlayout></Defaultlayout>}>
              <Route path="/" element={<Homepage></Homepage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/products">
                <Route path = "" element={<Products></Products>}></Route>
                <Route path = ":id" element={<ProductSingle></ProductSingle>}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
