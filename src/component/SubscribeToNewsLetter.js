import React from 'react'
import { useState } from 'react';
const SubscribeToNewsLetter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("https://newsletterrepo.vercel.app/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
        if (response.ok) {
          setMessage("Subscription successful!");
          setEmail(""); // Clear the input
        } else {
          setMessage(data.error || "Something went wrong.");
        }
      } catch (error) {
        setMessage("Failed to subscribe. Please try again.");
      }
    };
  
    return (
      <div>
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };

export default SubscribeToNewsLetter