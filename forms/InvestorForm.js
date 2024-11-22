import React, { useState } from 'react';
import { Button, TextField, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import axios from 'axios';

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phone: '',
    email: '',
    criteria: null,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await getAuthToken();
      await axios.post('/api/investor-form', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('The form was submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  const getAuthToken = async () => {
    // Add code to retrieve the authentication token from the chatbot or the user
    return 'example-token';
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Declaration of Qualified Investor
      </Typography>

      <TextField
        name="fullName"
        label="Full Name*"
        value={formData.fullName}
        onChange={handleInputChange}
        required
      />

      <TextField
        name="idNumber"
        label="ID Number*"
        value={formData.idNumber}
        onChange={handleInputChange}
        required
        pattern="\d{9}"
      />

      {/* Additional form fields */}

      <RadioGroup
        name="criteria"
        value={formData.criteria}
        onChange={handleInputChange}
        required
      >
        {/* Radio button options for eligibility criteria */}
      </RadioGroup>

      <Button type="submit" variant="contained" color="primary">
        Submit Form
      </Button>
    </form>
  );
};

export default InvestorForm;