import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import NavBar from "./components/header/NavBar"
import Home from "./page/home/Home"
import ListarCategorias from "./components/categorias/listar/ListarCategorias"
import DeletarCategoria from "./components/categorias/deletar/DeletarCategoria"
import FormCategoria from "./components/categorias/formulario/FormCategoria"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="min-h-[68vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;