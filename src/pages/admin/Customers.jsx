import React from 'react';
import { useAdmin } from '../../context/AdminContext';

export default function Customers() {
  const { customers } = useAdmin();

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h2 className="serif-heading" style={{ fontSize: '2rem' }}>Customer Directory</h2>
        <p style={{ color: 'var(--color-stone)', marginTop: '0.5rem' }}>Track individual purchasers and top spending clients.</p>
      </header>

      <div style={{ backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-alabaster)', borderBottom: '1px solid var(--color-border)' }}>
              <th style={{ padding: '1rem' }}>Customer Name</th>
              <th style={{ padding: '1rem' }}>Email / Contact</th>
              <th style={{ padding: '1rem' }}>Total Orders</th>
              <th style={{ padding: '1rem' }}>Lifetime Spend</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{customer.name}</td>
                <td style={{ padding: '1rem', color: 'var(--color-stone)' }}>{customer.email}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '50px', 
                    backgroundColor: 'var(--color-alabaster)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem'
                  }}>
                    {customer.orders} orders
                  </span>
                </td>
                <td style={{ padding: '1rem', fontWeight: 600 }}>Ksh {customer.totalSpent.toLocaleString()}</td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr><td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-stone)' }}>No customers registered yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
