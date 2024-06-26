import React from "react";
import Questions from "./Questions";

export default function FAQsSection() {
  const data = [
    {
      question:
        "How much does it cost to start a La Poire franchise, including upfront fees?",
      answer: "",
    },
    {
      question:
        "What kind of training and support can I expect as a new franchisee?",
      answer:
        "<p>As a La Poire franchisee, you will receive comprehensive training covering all aspects of the business. This includes in-person training at our flagship store, where you’ll learn about our operational standards, product preparation, and customer service excellence.</p><p> We also offer ongoing training programs through e-learning modules and direct support to ensure you’re up-to-date with the latest in our menu development and service techniques. Our dedicated franchise team will provide the guidance needed to uphold the quality and reputation of La Poire as you start and continue your journey with us.</p>",
    },
    {
      question:
        "What is the duration of the franchise agreement, and are there renewal options?",
      answer: "",
    },
    {
      question:
        "Does La Poire offer financing options or assist in obtaining financing?",
      answer: "",
    },
    {
      question:
        "What is the typical return on investment timeline for a La Poire franchise?",
      answer: "",
    },
    {
      question: "Will my franchise location receive an exclusive territory?",
      answer: "",
    },
  ];
  return (
    <div className="bg-white py-95">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-normal text-gray5">Your Questions, Answered - Unveiling the Sweet Opportunity.</h3>
          <h2 className="mb-40 text-5xl font-bold text-gray5">Frequently Asked Questions</h2>
          <Questions data={data} />
        </div>
      </div>
    </div>
  );
}
