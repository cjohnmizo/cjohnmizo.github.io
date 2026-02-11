"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Profile</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-emerald-500 rounded-full" />
                            About Me
                        </h3>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                I am an <span className="text-indigo-400 font-medium">IT Consultant</span> and <span className="text-emerald-400 font-medium">Software Developer</span> base in Khawlian, Mizoram. My journey in technology began at NIELIT Aizawl in 2018, and has evolved into a passion for architecting robust digital solutions that solve real-world problems.
                            </p>
                            <p>
                                Beyond development, I am deeply committed to education. As a <span className="text-white font-medium">Vocational Teacher</span> in IT & ITeS, I mentor the next generation of tech professionals, focusing on Domestic Data Entry Operations and fundamental computing skills.
                            </p>
                            <p>
                                I believe technology is the bridge between imagination and reality. My goal is to leverage my analytical expertise and creative vision to build applications that not only function flawlessly but also deliver exceptional user experiences.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-indigo-500 rounded-full" />
                                Experience
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl hover:border-indigo-500/30 transition-colors">
                                    <h4 className="text-xl font-bold text-white">Vocational Teacher (IT & ITeS)</h4>
                                    <p className="text-indigo-400 text-sm mb-2">Government of Mizoram • Present</p>
                                    <p className="text-gray-400 text-sm">
                                        Training students in Domestic Data Entry Operations, fostering digital literacy, and preparing the workforce for the IT sector.
                                    </p>
                                </div>
                                <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl hover:border-emerald-500/30 transition-colors">
                                    <h4 className="text-xl font-bold text-white">IT Consultant & Developer</h4>
                                    <p className="text-emerald-400 text-sm mb-2">Freelance • 2018 - Present</p>
                                    <p className="text-gray-400 text-sm">
                                        Architecting mobile and web solutions for local businesses and communities. Specializing in cross-platform development with Flutter and modern web stacks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-purple-500 rounded-full" />
                                Education
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-zinc-900 border border-white/5 p-4 rounded-lg">
                                    <div className="text-white font-medium">Master of Computer Application</div>
                                    <div className="text-gray-500 text-sm">74% Score</div>
                                </div>
                                <div className="bg-zinc-900 border border-white/5 p-4 rounded-lg">
                                    <div className="text-white font-medium">Bachelor of Computer Application</div>
                                    <div className="text-gray-500 text-sm">70% Score</div>
                                </div>
                                <div className="bg-zinc-900 border border-white/5 p-4 rounded-lg sm:col-span-2">
                                    <div className="text-white font-medium">Industrial Training & Cyber Security</div>
                                    <div className="text-gray-500 text-sm">82% Score</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
