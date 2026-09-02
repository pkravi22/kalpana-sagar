'use client';
import { useState, useEffect } from 'react';

export default function AdminClient() {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [savingId, setSavingId] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const initAuth = async () => {
      const localAuth = typeof window !== 'undefined' && localStorage.getItem('admin_auth') === 'true';
      if (localAuth) {
        setAuth(true);
      }

      try {
        const res = await fetch('/api/admin/auth', { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setAuth(true);
            if (typeof window !== 'undefined') localStorage.setItem('admin_auth', 'true');
            fetchMessages();
            setCheckingAuth(false);
            return;
          }
        }
      } catch (err) {
        console.error('Auth verification error:', err);
      }

      if (!localAuth) {
        setAuth(false);
      } else {
        fetchMessages();
      }
      setCheckingAuth(false);
    };

    initAuth();
  }, []);

  const login = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });
      if (res.ok) {
        setAuth(true);
        if (typeof window !== 'undefined') localStorage.setItem('admin_auth', 'true');
        fetchMessages();
      } else {
        const data = await res.json();
        setLoginError(data.error || 'अमान्य ईमेल या पासवर्ड');
      }
    } catch (err) {
      setLoginError('लॉगिन विफल। कृपया पुनः प्रयास करें।');
    }
  };

  const logout = async () => {
    if (typeof window !== 'undefined') localStorage.removeItem('admin_auth');
    await fetch('/api/admin/auth', { method: 'DELETE', credentials: 'include' });
    setAuth(false);
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/messages', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      } else if (res.status === 401) {
        if (typeof window !== 'undefined') localStorage.removeItem('admin_auth');
        setAuth(false);
      }
    } catch (err) {
      console.error('Failed to fetch messages:', err);
    }
    setLoading(false);
  };

  const updateMessage = async (id, updates) => {
    setSavingId(id);
    const res = await fetch('/api/admin/messages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates }),
      credentials: 'include'
    });
    if (res.ok) {
      setMessages(messages.map(m => m.id === id ? { ...m, ...updates } : m));
    }
    setSavingId(null);
  };

  if (checkingAuth && !auth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4b5563' }}>सत्यापन हो रहा है...</p>
      </div>
    );
  }

  if (!auth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
        <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h2 style={{ marginBottom: '1.5rem', color: '#111827', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>Admin Secure Login</h2>

          {loginError && (
            <div style={{ padding: '0.75rem', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="email"
              placeholder="Email (e.g. admin@gmail.com)"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
            />
            <button
              type="submit"
              style={{ padding: '0.85rem', background: '#e07628', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredMessages = messages.filter(msg => {
    if (activeTab === 'All') return true;
    return msg.site === activeTab;
  });

  return (
    <div style={{ padding: '2rem 1rem', minHeight: '100vh', background: '#f9fafb', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', background: 'white', padding: '1.5rem 2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#111827', fontWeight: 'bold' }}>जनसुनवाई Admin Portal</h1>
            <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>Manage and respond to public requests</p>
          </div>
          <button onClick={logout} style={{ padding: '0.6rem 1.2rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
        </header>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #e5e7eb' }}>
          {['All', 'Jitendra Sonkar', 'Kalpana Sonkar'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #e07628' : '3px solid transparent',
                color: activeTab === tab ? '#e07628' : '#6b7280',
                fontWeight: activeTab === tab ? 'bold' : '500',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'All' ? 'All Requests' : tab}
            </button>
          ))}
        </div>


        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280', fontSize: '1.1rem' }}>Loading messages...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredMessages.length === 0 && (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px', color: '#6b7280' }}>
                No messages found.
              </div>
            )}
            {filteredMessages.map(msg => {
              const isExpanded = expandedId === msg.id;
              return (
                <div key={msg.id} style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: isExpanded ? '0 4px 15px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s ease'
                }}>
                  {/* Accordion Header */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : msg.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1.25rem 1.5rem',
                      cursor: 'pointer',
                      background: isExpanded ? '#f8fafc' : 'white',
                      borderBottom: isExpanded ? '1px solid #e5e7eb' : 'none'
                    }}
                  >
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        background: msg.status === 'Resolved' ? '#d1fae5' : msg.status === 'In Progress' ? '#fef3c7' : '#fee2e2',
                        color: msg.status === 'Resolved' ? '#065f46' : msg.status === 'In Progress' ? '#92400e' : '#991b1b'
                      }}>
                        {msg.status || 'Pending'}
                      </span>
                      <strong style={{ fontSize: '1.05rem', color: '#111827' }}>{msg.name}</strong>
                      <span style={{ color: '#6b7280', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
                        — {msg.subject}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{new Date(msg.date).toLocaleDateString('hi-IN')}</span>
                      <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: '#9ca3af' }}>▼</span>
                    </div>
                  </div>

                  {/* Accordion Body */}
                  {isExpanded && (
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', color: '#6b7280' }}>Mobile</p>
                          <p style={{ margin: 0, fontWeight: '600', color: '#111827' }}>{msg.mobile}</p>
                        </div>
                        <div>
                          <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', color: '#6b7280' }}>Village / City</p>
                          <p style={{ margin: 0, fontWeight: '600', color: '#111827' }}>{msg.village}</p>
                        </div>
                      </div>

                      <div style={{ marginBottom: '1.5rem', background: '#fef2f2', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#b91c1c', fontWeight: 'bold' }}>समस्या का विवरण (Problem)</p>
                        <p style={{ margin: 0, color: '#374151', lineHeight: '1.6' }}>{msg.message}</p>
                      </div>

                      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label style={{ fontWeight: 'bold', color: '#374151', fontSize: '0.95rem' }}>समाधान / कार्यवाही (Admin Response)</label>
                        <textarea
                          placeholder="अपना जवाब यहाँ लिखें..."
                          defaultValue={msg.response}
                          onBlur={e => {
                            if (e.target.value !== msg.response) updateMessage(msg.id, { response: e.target.value });
                          }}
                          style={{
                            width: '100%',
                            padding: '1rem',
                            minHeight: '120px',
                            fontFamily: 'inherit',
                            borderRadius: '8px',
                            border: '1px solid #d1d5db',
                            resize: 'vertical',
                            outline: 'none',
                            fontSize: '0.95rem'
                          }}
                        />

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', gap: '1rem' }}>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '600', color: '#111827' }}>
                            <input
                              type="checkbox"
                              checked={msg.isPublic}
                              onChange={e => updateMessage(msg.id, { isPublic: e.target.checked })}
                              style={{ width: '1.2rem', height: '1.2rem', accentColor: '#10b981' }}
                            />
                            सार्वजनिक करें (Make Public)
                          </label>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {savingId === msg.id && <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 'bold' }}>Saving...</span>}
                            <select
                              value={msg.status || 'Pending'}
                              onChange={e => updateMessage(msg.id, { status: e.target.value })}
                              style={{
                                padding: '0.6rem 1rem',
                                borderRadius: '6px',
                                border: '1px solid #d1d5db',
                                background: 'white',
                                outline: 'none',
                                fontWeight: '600',
                                color: '#111827',
                                cursor: 'pointer'
                              }}
                            >
                              <option value="Pending">Pending (लंबित)</option>
                              <option value="In Progress">In Progress (कार्य प्रगति पर)</option>
                              <option value="Resolved">Resolved (समाधान हो गया)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
