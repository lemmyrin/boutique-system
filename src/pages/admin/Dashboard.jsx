import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Users, DollarSign, Package, ShoppingBag } from 'lucide-react';

export default function Dashboard() {
  const { sales, inventory, customers } = useAdmin();

  const totalRevenue = sales.reduce((acc, curr) => acc + curr.total, 0);
  const totalOrders = sales.length;
  const totalStock = inventory.reduce((acc, curr) => acc + curr.stock, 0);
  const totalCustomers = customers.length;

  const cards = [
    { title: 'Total Revenue', value: `Ksh ${totalRevenue.toLocaleString()}`, icon: <DollarSign size={24} color="var(--color-stone)" /> },
    { title: 'Total Orders', value: totalOrders, icon: <ShoppingBag size={24} color="var(--color-stone)" /> },
    { title: 'Inventory count', value: totalStock, icon: <Package size={24} color="var(--color-stone)" /> },
    { title: 'Registered Customers', value: totalCustomers, icon: <Users size={24} color="var(--color-stone)" /> }
  ];

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h2 className="serif-heading" style={{ fontSize: '2rem' }}>Executive Dashboard</h2>
        <p style={{ color: 'var(--color-stone)', marginTop: '0.5rem' }}>Automated financial summaries and active metrics.</p>
      </header>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {cards.map((card, idx) => (
          <div key={idx} style={{ backgroundColor: 'var(--color-white)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-stone)', fontWeight: 500, textTransform: 'uppercase' }}>{card.title}</span>
              {card.icon}
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>{card.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <h3 className="serif-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Recent Sales</h3>
      <div style={{ backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-alabaster)', borderBottom: '1px solid var(--color-border)' }}>
              <th style={{ padding: '1rem' }}>Order ID</th>
              <th style={{ padding: '1rem' }}>Date</th>
              <th style={{ padding: '1rem' }}>Customer</th>
              <th style={{ padding: '1rem' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.slice(0, 5).map(sale => (
              <tr key={sale.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>#{sale.id}</td>
                <td style={{ padding: '1rem', color: 'var(--color-stone)' }}>{new Date(sale.date).toLocaleString()}</td>
                <td style={{ padding: '1rem' }}>{sale.customer}</td>
                <td style={{ padding: '1rem', fontWeight: 600 }}>Ksh {sale.total.toLocaleString()}</td>
              </tr>
            ))}
            {sales.length === 0 && (
              <tr><td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-stone)' }}>No recent activity.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
