import { useState } from "react";
import Button from "./Button";
import Field from "./Field";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubscribe = async () => {
    // Validate form inputs if needed

    // Call the Campaign Monitor subscription function
    // await subscribeToCampaignMonitor(fullName, emailAddress);

    // Clear the form inputs after successful submission
    setFullName("");
    setEmailAddress("");
  };

  return (
    <div className="flex flex-col gap-3">
      <Field
        text="Full Name"
        label="Your Full Name"
        value={fullName}
        onChange={(e: any) => setFullName(e.target.value)}
      />
      <Field
        text="Email Address"
        label="Your Email Address"
        value={emailAddress}
        onChange={(e: any) => setEmailAddress(e.target.value)}
      />
      <Field
        text="Mobile Number"
        label="Your Mobile Number"
        value={phone}
        onChange={(e: any) => setEmailAddress(e.target.value)}
      />
      <Field
        text="Message"
        label="Enter Questions or Special Message"
        value={msg}
        onChange={(e: any) => setEmailAddress(e.target.value)}
        textarea
      />
      <div className="pt-4">
        <Button
          variant="primary"
          size="normal"
          pill
          uppercase
          onClick={handleSubscribe}
        >
          SUBMIT REQUEST
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
