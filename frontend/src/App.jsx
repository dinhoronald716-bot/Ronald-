import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import "./App.css";
function App() {
    return (
            <>
                <Navbar />
            
                <main className="main-content">
                    <AppRoutes />
                </main>
            
                <Footer />
            </>
    );
}

export default App;
