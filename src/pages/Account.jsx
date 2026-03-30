import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const { user, login, logout, updateUser, isDarkMode, toggleTheme } = useAppContext();
  const navigate = useNavigate();

  // Login Form State
  const [emailStr, setEmailStr] = useState('');
  const [password, setPassword] = useState('');

  // Settings Form State
  const [editName, setEditName] = useState(user?.name || '');
  const [editEmail, setEditEmail] = useState(user?.email || '');
  const [editAddress, setEditAddress] = useState(user?.address || '');
  const [savedMessage, setSavedMessage] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if ((emailStr.toLowerCase() === 'admin@maison.com' || emailStr.toLowerCase() === 'admin') && password === 'adminonly1') {
      navigate('/admin');
    } else {
      login(emailStr);
    }
  };

  const handleSaveDetails = (e) => {
    e.preventDefault();
    updateUser({ name: editName, email: editEmail, address: editAddress });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  // Pre-fill local state if user logs in
  React.useEffect(() => {
    if (user) {
      setEditName(user.name);
      setEditEmail(user.email);
      setEditAddress(user.address);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)', maxWidth: '500px' }}>
        <div style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <h1 className="serif-heading" style={{fontSize: '2rem', marginBottom: '1rem', textAlign: 'center'}}>Sign In</h1>
          <p style={{color: 'var(--color-stone)', textAlign: 'center', marginBottom: '2rem'}}>Access your premium Maison account.</p>
          <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              style={inputStyle}
              value={emailStr}
              onChange={(e) => setEmailStr(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-primary" style={{marginTop: '1rem', width: '100%'}}>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)' }}>
      <header style={{marginBottom: 'var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 className="serif-heading" style={{fontSize: '2.5rem'}}>My Account</h1>
        <button onClick={logout} className="btn-outline">Sign Out</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-lg)', '@media(min-width: 768px)': { gridTemplateColumns: '2fr 1fr' }}}>
        
        {/* Settings Form */}
        <div style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-lg)', border: '1px solid var(--color-border)' }}>
          <h2 className="serif-heading" style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>Personal Details</h2>
          <form onSubmit={handleSaveDetails} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" style={inputStyle} value={editName} onChange={(e) => setEditName(e.target.value)} required />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" style={inputStyle} value={editEmail} onChange={(e) => setEditEmail(e.target.value)} required />
              </div>
            </div>
            <div>
               <label style={labelStyle}>Default Shipping Address</label>
               <input type="text" style={inputStyle} value={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem'}}>
              <button type="submit" className="btn-primary">Save Changes</button>
              {savedMessage && <span style={{color: 'green', fontSize: '0.9rem'}}>Changes saved successfully.</span>}
            </div>
          </form>
        </div>

        {/* Preferences / Theme */}
        <div style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-lg)', border: '1px solid var(--color-border)', height: 'fit-content' }}>
          <h2 className="serif-heading" style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>Preferences</h2>
          
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <div style={{fontWeight: 500}}>Color Theme</div>
              <div style={{color: 'var(--color-stone)', fontSize: '0.85rem'}}>Toggle dark mode.</div>
            </div>
            
            {/* Custom Toggle Switch */}
            <div 
              style={{
                width: '50px', 
                height: '26px', 
                backgroundColor: isDarkMode ? 'var(--color-gold)' : 'var(--color-stone)', 
                borderRadius: '50px', 
                position: 'relative', 
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onClick={toggleTheme}
            >
              <div style={{
                width: '20px', 
                height: '20px', 
                backgroundColor: '#fff', 
                borderRadius: '50%', 
                position: 'absolute', 
                top: '3px', 
                left: isDarkMode ? '27px' : '3px',
                transition: 'left 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  border: '1px solid var(--color-border)',
  backgroundColor: 'transparent',
  color: 'var(--color-charcoal)',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: 'var(--color-stone)',
  marginBottom: '0.3rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};
