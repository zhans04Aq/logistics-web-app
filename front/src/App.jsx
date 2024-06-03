import { AuthProvider } from './services/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage'

function App() {
    return (
        <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="About" element={<AboutUsPage />} />
                        <Route path="Services" element={<ServicesPage />} />
                        <Route path="Cart" element={<CartPage/>}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
        </AuthProvider>
    );
}

export default App;
