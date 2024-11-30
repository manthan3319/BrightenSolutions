"use client";
import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { EverythingYou } from "../../../public/images/Images/page";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "What services does Brighten Solutions provide?",
    answer:
      "Brighten Solutions specializes in web development, digital marketing, UI/UX design, and technical support for businesses of all sizes.",
  },
  {
    id: 2,
    question: "How can I get started with your services?",
    answer:
      "You can contact us through our website or email us directly. We’ll schedule a consultation to understand your needs.",
  },
  {
    id: 3,
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your website or application runs smoothly.",
  },
  {
    id: 4,
    question: "Can you help with SEO for my website?",
    answer:
      "Absolutely! Brighten Solutions provides comprehensive SEO services to improve your website's visibility and rankings.",
  },
];

const FaqItem = memo(({ faq, activeFaq, toggleFaq }) => {
    
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleFaq(faq.id)}
      >
        <h3 className="font-semibold text-lg">{faq.question}</h3>
        <i
          className={`fa ${
            activeFaq === faq.id ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          aria-hidden="true"
        ></i>
      </div>
      {/* Use CSS transition for the answer */}
      {activeFaq === faq.id && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mt-3"
        >
          <p className="text-gray-600">{faq.answer}</p>
        </motion.div>
      )}
    </div>
  );
});

FaqItem.displayName = "FaqItem";

const KnowAbout = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="sm:py-16 py-[5px] bg-gray-100">
      <div className="lg:max-w-7xl mx-auto px-6">
        {/* Section Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2  h-[500px] flex items-center justify-center">
              <Image src={EverythingYou} alt="EverythingYou" className="w-[100%]" />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <p className="text-orange-600 font-bold">Help & Support</p>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to Know About Our Services
            </h1>
            <p className="text-gray-700 mb-6">
              Get answers to common questions about our web development services, from initial strategy to ongoing support.
            </p>

            {/* FAQ Section */}
            <div className="faq-section space-y-4">
              {faqData.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  activeFaq={activeFaq}
                  toggleFaq={toggleFaq}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAbout;
