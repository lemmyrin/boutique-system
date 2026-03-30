import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Package, Users, BarChart3, ShoppingCart, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  const navs = [
    { name: 'Dashboard', path: '/admin', icon: <BarChart3 size={20} /> },
    { name: 'Inventory', path: '/admin/inventory', icon: <Package size={20} /> },
    { name: 'Point of Sale', path: '/admin/pos', icon: <ShoppingCart size={20} /> },
    { name: 'Customers', path: '/admin/customers', icon: <Users size={20} /> }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-alabaster)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--color-white)', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <h1 className="serif-heading" style={{fontSize: '1.5rem', margin: 0}}>Maison</h1>
          <div style={{fontSize: '0.8rem', color: 'var(--color-stone)', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Management System</div>
        </div>

        <nav style={{ flexGrow: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navs.map(nav => {
            const active = location.pathname === nav.path;
            return (
              <Link 
                key={nav.path} 
                to={nav.path} 
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.8rem', 
                  padding: '0.8rem 1rem',
                  borderRadius: '6px',
                  backgroundColor: active ? 'var(--color-charcoal)' : 'transparent',
                  color: active ? 'var(--color-white)' : 'var(--color-charcoal)',
                  fontWeight: active ? 500 : 400,
                  transition: 'background-color 0.2s'
                }}
              >
                {nav.icon}
                {nav.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '1.5rem 1rem', borderTop: '1px solid var(--color-border)' }}>
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-stone)', padding: '0.8rem 1rem'}}>
            <LogOut size={20} />
            Exit to Storefront
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, padding: '2rem 3rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}
