import React, { useState } from 'react';
import Field from './Field';
import Button from './Button';
import { subscribeToCampaignMonitor } from '../api/general';

const SubscriptionForm = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleSubscribe = async () => {
    // Validate form inputs if needed

    // Call the Campaign Monitor subscription function
    await subscribeToCampaignMonitor(fullName, emailAddress);

    // Clear the form inputs after successful submission
    setFullName('');
    setEmailAddress('');
  };

  return (
    <div>
      <Field
        text="Full Name"
        placeholder="Full Name"
        value={fullName}
        onChange={(e:any) => setFullName(e.target.value)}
      />
      <Field
        text="Email Address"
        placeholder="Email Address"
        value={emailAddress}
        onChange={(e:any) => setEmailAddress(e.target.value)}
      />
      <Button
        variant="primary"
        size="normal"
        pill
        uppercase
        onClick={handleSubscribe}
      >
        Subscribe Now
      </Button>
    </div>
  );
};

export default SubscriptionForm;
