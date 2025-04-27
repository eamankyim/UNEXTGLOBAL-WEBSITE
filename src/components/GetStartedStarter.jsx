import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Assume you're using a calendar component like this
import { Button, Input, Textarea, Select, Option, RadioGroup, Radio, Label } from 'your-ui-library'; // Adjust according to your UI library

const GetStartedFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessSize: '',
    industry: '',
    businessGoals: '',
    consultationTime: '',
    consultationMethod: 'Zoom',
    specialNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCalendarChange = (date) => {
    setFormData((prevData) => ({ ...prevData, consultationTime: date }));
  };

  const handleSubmit = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <div className="step-1">
          <div className="plan-details">
            <h2>You’ve Selected the Growth Plan</h2>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Price: $500/month</li>
            </ul>
          </div>
          <div className="form-container">
            <h2>Business Information</h2>
            <form>
              <div className="form-field">
                <Label for="businessName">Business Name</Label>
                <Input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <Label>Business Size</Label>
                <RadioGroup
                  name="businessSize"
                  value={formData.businessSize}
                  onChange={handleChange}
                >
                  <Radio value="Small" label="Small" />
                  <Radio value="Medium" label="Medium" />
                  <Radio value="Large" label="Large" />
                </RadioGroup>
              </div>
              <div className="form-field">
                <Label for="industry">Industry</Label>
                <Select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <Option value="Tech">Tech</Option>
                  <Option value="Healthcare">Healthcare</Option>
                  <Option value="Retail">Retail</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </div>
              <div className="form-field">
                <Label for="businessGoals">Business Goals</Label>
                <Textarea
                  id="businessGoals"
                  name="businessGoals"
                  value={formData.businessGoals}
                  onChange={handleChange}
                />
              </div>
            </form>
            <Button onClick={() => setStep(2)}>Next: Book Your Consultation</Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step-2">
          <h2>Book Your Consultation</h2>
          <div className="calendar-container">
            <Calendar onChange={handleCalendarChange} value={formData.consultationTime} />
          </div>
          <div className="form-container">
            <Label for="consultationMethod">Consultation Method</Label>
            <Select
              id="consultationMethod"
              name="consultationMethod"
              value={formData.consultationMethod}
              onChange={handleChange}
            >
              <Option value="Zoom">Zoom</Option>
              <Option value="Phone">Phone</Option>
              <Option value="In-Person">In-Person</Option>
            </Select>
            <div className="form-field">
              <Label for="specialNotes">Any Special Notes?</Label>
              <Textarea
                id="specialNotes"
                name="specialNotes"
                value={formData.specialNotes}
                onChange={handleChange}
              />
            </div>
            <Button onClick={handleSubmit}>Submit & Confirm</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step-3">
          <h2>Thank You!</h2>
          <p>You’ve selected the Growth Plan.</p>
          <p>Your consultation is scheduled for {formData.consultationTime} via {formData.consultationMethod}.</p>
          <Button onClick={() => alert('Downloading confirmation...')}>Download Confirmation</Button>
          <Button onClick={() => alert('Adding to calendar...')}>Add to Calendar</Button>
          <Button onClick={() => setStep(1)}>Go Back to Dashboard</Button>
          <Button onClick={() => alert('Exploring more services...')}>Explore More Services</Button>
        </div>
      )}
    </div>
  );
};

export default GetStartedFlow;
