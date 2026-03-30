import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import About from './pages/About';
import { AppProvider } from './context/AppContext';
import { AdminProvider } from './context/AdminContext';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminInventory from './pages/admin/Inventory';
import AdminPOS from './pages/admin/POS';
import AdminCustomers from './pages/admin/Customers';

function App() {
  return (
    <AdminProvider>
      <AppProvider>
        <CartProvider>
          <Router>
            <Routes>
              {/* Storefront Layout */}
              <Route path="/*" element={
                <div className="app-wrapper">
                  <Navbar />
                  <CartDrawer />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/account" element={<Account />} />
                      <Route path="/about" element={<About />} />
                    </Routes>
                  </main>
                </div>
              } />

              {/* Admin Management System Layout */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="inventory" element={<AdminInventory />} />
                <Route path="pos" element={<AdminPOS />} />
                <Route path="customers" element={<AdminCustomers />} />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </AppProvider>
    </AdminProvider>
  );
}

export default App;
