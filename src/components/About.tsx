"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="glass p-8 rounded-2xl border-white/10">
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p className="text-lg">
                                    I'm a <span className="text-white font-semibold">Full-Stack Developer</span> based in Mizoram, India, with expertise in building modern web and mobile applications. With a <span className="text-white font-semibold">Master's in Computer Application</span> and over 6 years of development experience, I specialize in React, Next.js, and Flutter.
                                </p>
                                <p>
                                    Currently serving as a <span className="text-emerald-400 font-medium">Vocational IT Teacher</span> with the Government of Mizoram while working with clients worldwide on freelance projects. I'm passionate about clean code, user experience, and delivering solutions that make a real impact.
                                </p>
                                <p>
                                    My approach combines technical expertise with a deep understanding of business needs. Whether it's a complex web application, a cross-platform mobile app, or a full-stack solution, I focus on creating scalable, maintainable code that solves real problems.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="glass p-6 rounded-2xl border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="text-sm text-gray-500">Location</div>
                                        <div className="text-white">Mizoram, India</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Experience</div>
                                        <div className="text-white">6+ Years</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Education</div>
                                        <div className="text-white">Master of Computer Application</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Languages</div>
                                        <div className="text-white">English, Mizo</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border-emerald-500/30">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-emerald-400 font-semibold">Available for Work</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                Open to freelance projects and remote opportunities
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
