'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Simulating sending the email
    const result = await sendEmail(formData); // You can replace this with your actual email-sending logic

    if (result.success) {
      setFormStatus({ success: true, message: 'Message Sent!' });
    } else {
      setFormStatus({ success: false, message: 'Something went wrong, please try again.' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            className="text-6xl font-bold mb-8 gradient-text text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about Evion? We'd love to hear from you!
          </motion.p>
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
          {formStatus && (
            <motion.div 
              className={`mt-6 p-4 rounded-md ${formStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formStatus.message}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

async function sendEmail(formData: FormData) {
  // Simulate sending the email (you should replace this with your email-sending logic)
  return new Promise<{ success: boolean; message?: string }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message Sent!' }); // Simulating success
    }, 1000);
  });
}
