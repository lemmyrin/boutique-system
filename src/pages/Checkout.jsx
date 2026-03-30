import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAdmin } from '../context/AdminContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { addSale } = useAdmin();
  const [ordered, setOrdered] = useState(false);

  // Form states bindings
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Form mock
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sync with Admin Dashboard
    addSale({
      customer: `${firstName} ${lastName}`.trim(),
      customerEmail: email,
      items: cartItems.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
      total: totalPrice
    });

    clearCart();
    setOrdered(true);
  };

  if (ordered) {
    return (
      <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)', textAlign: 'center' }}>
        <h1 className="serif-heading" style={{fontSize: '3rem', marginBottom: '1rem'}}>Thank You.</h1>
        <p style={{color: 'var(--color-stone)', fontSize: '1.1rem', marginBottom: '2rem'}}>
          Your order has been placed successfully and is being processed.
        </p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
      <h1 className="serif-heading" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Checkout</h1>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
           <p style={{color: 'var(--color-stone)', marginBottom: '1rem'}}>You have nothing in your cart to checkout.</p>
           <Link to="/shop" className="btn-outline">Go to Shop</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-lg)', '@media(min-width: 768px)': { gridTemplateColumns: '1.5fr 1fr' }}}>
          
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <h2 className="serif-heading" style={{fontSize: '1.5rem'}}>Shipping Details</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <input type="text" placeholder="First Name" required style={inputStyle} value={firstName} onChange={e=>setFirstName(e.target.value)} />
              <input type="text" placeholder="Last Name" required style={inputStyle} value={lastName} onChange={e=>setLastName(e.target.value)} />
            </div>
            
            <input type="email" placeholder="Email Address" required style={inputStyle} value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="text" placeholder="Street Address" required style={inputStyle} />
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <input type="text" placeholder="City" required style={inputStyle} />
              <input type="text" placeholder="Postal Code" required style={inputStyle} />
            </div>
            
            <h2 className="serif-heading" style={{fontSize: '1.5rem', marginTop: '1rem'}}>Payment Information</h2>
            <input type="text" placeholder="Card Number" required style={inputStyle} />
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <input type="text" placeholder="MM/YY" required style={inputStyle} />
              <input type="text" placeholder="CVC" required style={inputStyle} />
            </div>

            <button type="submit" className="btn-primary" style={{marginTop: '1rem', padding: '1rem'}}>
              Place Order — Ksh {totalPrice.toLocaleString()}
            </button>
          </form>

          <div style={{backgroundColor: 'var(--color-white)', padding: 'var(--spacing-md)', border: '1px solid var(--color-border)'}}>
            <h2 className="serif-heading" style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>Order Summary</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
              {cartItems.map((item) => (
                <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem'}}>
                  <span>{item.quantity} × {item.name}</span>
                  <span style={{color: 'var(--color-stone)'}}>Ksh {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div style={{borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 600}}>
              <span>Total</span>
              <span>Ksh {totalPrice.toLocaleString()}</span>
            </div>
          </div>

        </div>
      )}
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
