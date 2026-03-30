import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

export default function POS() {
  const { inventory, addSale } = useAdmin();
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState('Walk-in Customer');
  const [success, setSuccess] = useState(false);

  // Filter out items with 0 stock
  const availableItems = inventory.filter(i => i.stock > 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!selectedItem) return;

    const itemObj = inventory.find(i => i.id === parseInt(selectedItem));
    if (!itemObj) return;

    addSale({
      customer: customer,
      items: [{ ...itemObj, quantity: parseInt(quantity) }],
      total: itemObj.price * parseInt(quantity)
    });

    setSuccess(true);
    setSelectedItem('');
    setQuantity(1);
    setCustomer('Walk-in Customer');
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '600px' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 className="serif-heading" style={{ fontSize: '2rem' }}>Point of Sale (POS)</h2>
        <p style={{ color: 'var(--color-stone)', marginTop: '0.5rem' }}>Manually record physical transactions to sync with reporting.</p>
      </header>

      <div style={{ backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid var(--color-border)', padding: '2rem' }}>
        {success && (
          <div style={{ padding: '1rem', backgroundColor: '#EDF7ED', color: '#2E7D32', border: '1px solid #C8E6C9', borderRadius: '4px', marginBottom: '1.5rem' }}>
            Sale recorded successfully! Inventory has been updated.
          </div>
        )}

        <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={labelStyle}>Select Product</label>
            <select 
              style={inputStyle} 
              value={selectedItem} 
              onChange={(e) => setSelectedItem(e.target.value)}
              required
            >
              <option value="" disabled>Choose an item...</option>
              {availableItems.map(item => (
                <option key={item.id} value={item.id}>{item.name} - Ksh {item.price.toLocaleString()} ({item.stock} in stock)</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Quantity</label>
              <input 
                type="number" 
                min="1" 
                style={inputStyle} 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
                required 
              />
            </div>
            <div>
               <label style={labelStyle}>Customer Name (Optional)</label>
               <input 
                 type="text" 
                 style={inputStyle} 
                 value={customer} 
                 onChange={(e) => setCustomer(e.target.value)} 
               />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }} disabled={availableItems.length === 0}>
            Record Sale
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-alabaster)',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: 'var(--color-stone)',
  marginBottom: '0.4rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontWeight: 500
};
