import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPage from "./pages/InicioPage";
import ProductosPage from "./pages/ProductosPage";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";

/**
 * App
 * ---
 * Registro de rutas de la aplicación usando React Router.
 * - `/` -> `InicioPage`
 * - `/productos` -> `ProductosPage`
 * - `/admin` -> `AdminPage`
 * - `/productos/:id` -> `ProductDetailPage`
 * - `*` -> `ErrorPage` (wildcard 404)
 *
 * Nota: solo se añade documentación inline; no se alteró la configuración de rutas.
 */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioPage />} />
  <Route path="/productos" element={<ProductosPage />} />
  <Route path="/admin" element={<AdminPage />} />
  <Route path="/productos/:id" element={<ProductDetailPage />} />
  <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
