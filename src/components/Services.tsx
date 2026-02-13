"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Web Application Development",
        description: "Custom web applications built with React, Next.js, and modern frameworks. Responsive, scalable, and optimized for performance.",
        features: ["React & Next.js", "Responsive Design", "Performance Optimization"]
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        title: "Mobile App Development",
        description: "Cross-platform mobile applications using Flutter. Native performance with a single codebase for iOS and Android.",
        features: ["Flutter & Dart", "Cross-Platform", "Native Performance"]
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        title: "Full-Stack Solutions",
        description: "End-to-end development from database design to deployment. API integration, authentication, and cloud infrastructure.",
        features: ["API Development", "Database Design", "Cloud Deployment"]
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: "Technical Consulting",
        description: "Expert guidance on technology stack selection, code review, architecture planning, and optimization strategies.",
        features: ["Code Review", "Architecture Planning", "Tech Stack Selection"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
                        What I Do
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Delivering high-quality solutions tailored to your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="glass p-6 md:p-8 rounded-2xl border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 group-hover:border-indigo-500/60 transition-colors">
                                    {React.createElement(service.icon as any, { className: "w-6 h-6 text-indigo-400" })}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="text-xs px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-400 mb-6">
                        Have a project in mind? Let's discuss how I can help bring your ideas to life.
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                    >
                        Start a Project
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
