"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-zinc-950">
            {/* Background gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/20 rounded-full blur-[80px] md:blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10 ring-4 ring-indigo-500/20">
                        {/* Placeholder for profile image - User should replace this */}
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-30 animate-spin-slow" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-medium text-emerald-400 mb-4 tracking-wide"
                >
                    Hi, I’m C. John
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                    Full-Stack Developer <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">& IT Educator</span>
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed px-4"
                >
                    Transforming complex ideas into high-performance applications and empowering the next generation of tech talent in Mizoram.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                    >
                        View My Work
                    </ScrollLink>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-colors backdrop-blur-sm border border-white/10 hover:border-emerald-500/30"
                    >
                        Contact Me
                    </ScrollLink>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-16 flex items-center gap-6"
                >
                    <a href="https://github.com/cjohnmizo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/c-john-remthang/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:johnchangsan39@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10"
                >
                    <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-emerald-400 transition-colors">
                        <ArrowDown className="w-6 h-6" />
                    </ScrollLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

