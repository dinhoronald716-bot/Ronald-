import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <><div className="app-layout">
          {!hideNavbar && <Navbar />}

          <main className="content">
              <AppRoutes />
          </main>

          <Footer />
      </div>
      

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;