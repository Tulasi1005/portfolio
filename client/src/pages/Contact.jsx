import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    setError("Please fill all fields.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const text = await response.text();

let data;

try {
  data = JSON.parse(text);
} catch {
  throw new Error(text);
}

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message.');
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  } catch (error) {
    console.error('Contact Form Error:', error);
    setError(error.message || 'Unable to send message. Please verify your connection.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-sky-accent uppercase font-mono">
          Get in Touch
        </h2>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          <span className="text-gradient">Contact</span> Details
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          <div className="glass-premium rounded-3xl p-6 sm:p-8 border border-slate-700/50 space-y-6 text-left shadow-lg">
            <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
              Let's Connect
            </h3>
            <p className="text-sm text-slate-400 light:text-slate-500 leading-relaxed">
              If you have a role that matches my experience, an interesting project to build, or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-4">
              <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-4 text-slate-300 light:text-slate-700 hover:text-sky-accent transition-colors group">
                <div className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono font-medium uppercase">Phone</p>
                  <p className="text-sm font-semibold">{personalInfo.phone}</p>
                </div>
              </a>

              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-4 text-slate-300 light:text-slate-700 hover:text-sky-accent transition-colors group">
                <div className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono font-medium uppercase">Email</p>
                  <p className="text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 text-slate-300 light:text-slate-700">
                <div className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono font-medium uppercase">Location</p>
                  <p className="text-sm font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-4 border-t border-slate-800 light:border-slate-250">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent light:text-slate-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent light:text-slate-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Mockup */}
          <div className="glass-premium rounded-3xl p-4 border border-slate-700/50 shadow-lg flex-1 min-h-[180px] relative overflow-hidden flex flex-col justify-end text-left bg-slate-950/60 light:bg-slate-100">
            {/* Visual Vector Grid simulated map */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] light:bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:15px_15px] opacity-60" />
            
            {/* Pulsing indicator pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center relative">
                <span className="absolute w-8 h-8 rounded-full bg-primary/40 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
              <span className="mt-2 px-2.5 py-1 rounded bg-slate-900 text-[10px] font-bold text-sky-accent border border-slate-700 shadow-md">
                India
              </span>
            </div>
            
            <span className="relative z-10 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              Regional Presence
            </span>
            <span className="relative z-10 text-xs font-semibold text-slate-400 mt-0.5">
              Available for relocation / remote engagements
            </span>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphic form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-premium rounded-3xl p-6 sm:p-8 border border-slate-700/50 text-left shadow-lg relative overflow-hidden"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-500 flex items-center justify-center text-2xl mb-6">
                ✓
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-450 light:text-slate-650 mt-2 text-sm max-w-sm">
                Thank you for reaching out. I have received your email and will respond to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 light:bg-slate-200 light:border-slate-350 hover:bg-slate-850 light:hover:bg-slate-250 text-xs font-semibold text-white light:text-slate-800 cursor-pointer transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
                Send a Message
              </h3>
              
              {error && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/35 text-rose-500 text-xs font-semibold">
                  {error}
                </div>
              )}

              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 light:bg-white border border-slate-800 light:border-slate-300 text-sm focus:outline-none focus:border-sky-accent light:focus:border-primary text-white light:text-slate-900 transition-all placeholder-slate-600"
                />
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 light:bg-white border border-slate-800 light:border-slate-300 text-sm focus:outline-none focus:border-sky-accent light:focus:border-primary text-white light:text-slate-900 transition-all placeholder-slate-600"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 light:bg-white border border-slate-800 light:border-slate-300 text-sm focus:outline-none focus:border-sky-accent light:focus:border-primary text-white light:text-slate-900 transition-all placeholder-slate-600"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 light:bg-white border border-slate-800 light:border-slate-300 text-sm focus:outline-none focus:border-sky-accent light:focus:border-primary text-white light:text-slate-900 transition-all placeholder-slate-600 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-sky-accent hover:shadow-lg hover:shadow-primary/20 text-sm font-semibold text-white cursor-pointer transition-all flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane size={12} className="relative top-[0.5px]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
