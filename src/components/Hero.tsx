"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
            {/* Animated Background gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-15%] left-[-15%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] md:blur-[140px]"
                />
                <motion.div
                    animate={{
                        scale: [1.3, 1, 1.3],
                        rotate: [360, 180, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-15%] right-[-15%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-l from-emerald-500/20 to-cyan-500/20 rounded-full blur-[100px] md:blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [0, 150, 0],
                        y: [0, -75, 0],
                        opacity: [0.15, 0.3, 0.15]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[100px] md:blur-[140px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-8 relative group"
                >
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10 ring-4 ring-indigo-500/30 group-hover:ring-indigo-500/50 transition-all duration-500">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                    </div>
                    <motion.div
                        className="absolute -inset-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-medium text-emerald-400 mb-4 tracking-wide"
                >
                    Hi, I'm C. John
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                    Full-Stack Developer <br className="hidden md:block" />
                    <span className="gradient-text">& IT Educator</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed px-4"
                >
                    Transforming complex ideas into high-performance applications and empowering the next generation of tech talent in Mizoram.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 inline-block"
                        >
                            View My Work
                        </ScrollLink>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/20 hover:border-emerald-500/50 inline-block"
                        >
                            Contact Me
                        </ScrollLink>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="mt-16 flex items-center gap-6"
                >
                    {[
                        { href: "https://github.com/cjohnmizo/", Icon: Github },
                        { href: "https://www.linkedin.com/in/c-john-remthang/", Icon: Linkedin },
                        { href: "mailto:johnchangsan39@gmail.com", Icon: Mail }
                    ].map(({ href, Icon }, index) => (
                        <motion.a
                            key={href}
                            href={href}
                            target={href.startsWith('http') ? "_blank" : undefined}
                            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                            whileHover={{ scale: 1.2, y: -5 }}
                            className="text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/5"
                        >
                            <Icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10"
                >
                    <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-emerald-400 transition-colors p-3 rounded-full hover:bg-white/5">
                        <ArrowDown className="w-6 h-6" />
                    </ScrollLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

