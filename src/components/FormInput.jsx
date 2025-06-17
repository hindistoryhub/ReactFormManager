import React from 'react';

function FormInput({ label, name, type = 'text', value, onChange, error, placeholder, required = false }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label 
        htmlFor={name}
        style={{
          display: 'block',
          marginBottom: '5px',
          fontWeight: '500',
          color: '#333',
          fontSize: '14px'
        }}
      >
        {label}
        {required && <span style={{ color: 'red', marginLeft: '2px' }}>*</span>}
      </label>
      
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          border: error ? '1px solid #dc3545' : '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.3s'
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
  );
}

export default FormInput;