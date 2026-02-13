"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const steps = [
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: "Discovery",
        description: "Understanding your requirements, goals, and target audience to create a solid foundation."
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "Planning",
        description: "Defining architecture, technology stack, timeline, and deliverables with clear milestones."
    },
    {
        icon: Code2,
        title: "Development",
        description: "Building your solution iteratively with regular updates and feedback integration."
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: "Testing",
        description: "Rigorous quality assurance to ensure performance, security, and cross-platform compatibility."
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Deployment",
        description: "Launching your application with proper configuration, optimization, and monitoring setup."
    },
    {
        icon: () => (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: "Support",
        description: "Ongoing maintenance, updates, and technical support to keep your application running smoothly."
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
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
                        How I Work
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        A proven process that delivers results from concept to deployment
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass p-6 rounded-2xl border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full group">
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    {index + 1}
                                </div>

                                <div className="flex flex-col items-start">
                                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-500/30 mb-4 group-hover:border-purple-500/60 transition-colors">
                                        {React.createElement(step.icon as any, { className: "w-6 h-6 text-purple-400" })}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center glass p-8 rounded-2xl border-indigo-500/30"
                >
                    <h3 className="text-2xl font-bold text-white mb-3">Transparent Communication</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I believe in keeping you informed every step of the way. Regular updates, clear documentation, and open communication ensure we're always aligned on project goals and progress.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
