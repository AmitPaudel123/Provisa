"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Basic validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone Number is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Perform form submission
      console.log("Form submitted:", formData);
      // You can add your form submission logic here
      // For example, make an API request to submit the form data
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-3xl text-[#8b37d8] font-bold mb-4">
        For Your Inquiries
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full`}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 w-full resize-none`}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#cf2e2e] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#8b37d8] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
