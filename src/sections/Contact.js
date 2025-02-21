import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import StarWrapper from "../components/StarWrapper";
import "./Contact.css";  
import ComputerCanvas from "../components/Computers";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const serviceId = "service_t2tkj9m"; 
  const templateId = "template_3moodwb"; 
  const publicKey = "MbcyWT_V-Vdt379Bd"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const showAlert = (type, title, message) => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert-overlay");

    alertDiv.innerHTML = `
      <div class="modern-success-message ${type}">
        <button class="close-btn" onclick="this.parentElement.parentElement.remove()">×</button>
        <div class="icon-wrapper">
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="${type}-icon">
            <path d="M9 12l2 2 4-4"></path>
            <circle r="10" cy="12" cx="12"></circle>
          </svg>
        </div>
        <div class="text-wrapper">
          <div class="title">${title}</div>
          <div class="message">${message}</div>
        </div>
      </div>
    `;

    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showAlert("error", "Error", "All fields are required!");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "talbihela7@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          showAlert("success", "Success", "Thank you! I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert("error", "Error", "Something went wrong. Please try again.");
        }
      );
  };

  const slideIn = (direction, type, delay, duration) => ({
    hidden: { x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0 },
    show: {
      x: 0,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  });

  return (
    <div className="contact-container">
    
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="contact-left">
        <p className="contact-subtext">Get in touch</p>
        <h3 className="contact-headtext">Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="form-label">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="form-input"
              required
            />
          </label>
          <label className="form-label">
            <span>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="form-input"
              required
            />
          </label>
          <label className="form-label">
            <span>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="form-textarea"
              required
            />
          </label>

          <button type="submit" className="form-button">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="contact-right">
        <ComputerCanvas />
      </motion.div>
      
    </div>
  );
};

export default StarWrapper(Contact, "contact");
