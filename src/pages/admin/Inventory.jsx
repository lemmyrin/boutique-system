import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Edit2, Save, Search } from 'lucide-react';

export default function Inventory() {
  const { inventory, updateProductStock } = useAdmin();
  const [editingId, setEditingId] = useState(null);
  const [editStock, setEditStock] = useState(0);
  const [search, setSearch] = useState('');

  const startEdit = (product) => {
    setEditingId(product.id);
    setEditStock(product.stock);
  };

  const saveEdit = (id) => {
    updateProductStock(id, parseInt(editStock, 10));
    setEditingId(null);
  };

  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.id.toString().includes(search)
  );

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="serif-heading" style={{ fontSize: '2rem' }}>Inventory Tracking</h2>
          <p style={{ color: 'var(--color-stone)', marginTop: '0.5rem' }}>Monitor real-time stock levels across all collections.</p>
        </div>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-stone)' }} />
          <input 
            type="text" 
            placeholder="Search products by name or ID..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-white)', color: 'var(--color-charcoal)', outline: 'none' }}
          />
        </div>
      </header>

      <div style={{ backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-alabaster)', borderBottom: '1px solid var(--color-border)' }}>
              <th style={{ padding: '1rem', width: '80px' }}>Image</th>
              <th style={{ padding: '1rem' }}>Product Name</th>
              <th style={{ padding: '1rem' }}>Category</th>
              <th style={{ padding: '1rem' }}>Price</th>
              <th style={{ padding: '1rem', width: '150px' }}>Stock Level</th>
              <th style={{ padding: '1rem', width: '100px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.5rem 1rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                </td>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{item.name}</td>
                <td style={{ padding: '1rem', color: 'var(--color-stone)' }}>{item.category}</td>
                <td style={{ padding: '1rem' }}>Ksh {item.price.toLocaleString()}</td>
                <td style={{ padding: '1rem' }}>
                  {editingId === item.id ? (
                     <input 
                       type="number" 
                       value={editStock} 
                       onChange={(e) => setEditStock(e.target.value)} 
                       style={{ width: '80px', padding: '0.4rem', border: '1px solid var(--color-charcoal)', outline: 'none' }}
                     />
                  ) : (
                    <span style={{ 
                      display: 'inline-block', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '50px', 
                      backgroundColor: item.stock < 5 ? '#FFEBEB' : '#EDF7ED', 
                      color: item.stock < 5 ? '#D32F2F' : '#2E7D32',
                      fontWeight: 500,
                      fontSize: '0.85rem'
                    }}>
                      {item.stock} in stock
                    </span>
                  )}
                </td>
                <td style={{ padding: '1rem' }}>
                  {editingId === item.id ? (
                    <button onClick={() => saveEdit(item.id)} className="btn-icon" style={{color: 'green'}}><Save size={18} /></button>
                  ) : (
                    <button onClick={() => startEdit(item)} className="btn-icon"><Edit2 size={18} /></button>
                  )}
                </td>
              </tr>
            ))}
            {filteredInventory.length === 0 && (
              <tr><td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-stone)' }}>No products found matching "{search}".</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
