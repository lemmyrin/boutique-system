import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* Mobile menu - decorative for now */}
        <button className="btn-icon d-md-none" style={{display: 'flex', width: '24px'}} onClick={() => {}}>
           <Menu size={24} />
        </button>

        <Link to="/" className="nav-logo serif-heading">
          MAISON
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Catalog</Link>
          <Link to="/about" className="nav-link">Journal</Link>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-icon">
            <Search size={22} />
          </button>
          
          <Link to="/account" className="btn-icon">
            <User size={22} />
          </Link>
          
          <button className="btn-icon" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
