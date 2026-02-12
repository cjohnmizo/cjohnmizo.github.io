"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Form submitted:", formData);
        alert("Thanks for getting in touch! This is a demo form.");
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Email</h4>
                                    <a href="mailto:johnchangsan39@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        johnchangsan39@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Social Media</h4>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">

                                        <a href="https://www.instagram.com/c.john_mizo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2">
                                            <Instagram className="w-5 h-5" />
                                            <span>Instagram</span>
                                        </a>
                                        <a href="https://www.facebook.com/john.changsan.9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2">
                                            <Facebook className="w-5 h-5" />
                                            <span>Facebook</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Address</h4>
                                    <p className="text-gray-400">Khawlian, Saitual Mizoram, 796261</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-zinc-900 border border-white/5 rounded-xl">
                            <h4 className="text-white font-medium mb-2">Looking for a freelancer?</h4>
                            <p className="text-gray-400 text-sm">
                                I am currently available for freelance projects and open to full-time opportunities.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
