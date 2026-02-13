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
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 mx-auto rounded-full" />
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
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg text-indigo-400 border border-indigo-500/30">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Email</h4>
                                    <a href="mailto:johnchangsan39@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        johnchangsan39@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 border border-purple-500/30">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Social Media</h4>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">

                                        <a href="https://www.instagram.com/c.john_mizo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2">
                                            <Instagram className="w-5 h-5" />
                                            <span>Instagram</span>
                                        </a>
                                        <a href="https://www.facebook.com/john.changsan.9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                                            <Facebook className="w-5 h-5" />
                                            <span>Facebook</span>
                                        </a>
                                    </div>

                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg text-emerald-400 border border-emerald-500/30">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Address</h4>
                                    <p className="text-gray-400">Khawlian, Saitual Mizoram, 796261</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-12 p-6 glass rounded-xl border-indigo-500/30">
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
                        className="glass p-4 sm:p-6 md:p-8 rounded-2xl border-white/10"
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
                                    className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-500 transition-all outline-none"
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
                                    className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-500 transition-all outline-none"
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
                                    className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-500 transition-all outline-none resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
