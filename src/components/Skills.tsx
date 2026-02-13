"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const skills = [
    {
        category: "Mobile Development",
        items: ["Flutter", "Dart", "Android SDK", "iOS Development", "Responsive UI"],
        icon: "smartphone"
    },
    {
        category: "Web Development",
        items: ["React", "Next.js", "Laravel", "Tailwind CSS", "Bootstrap", "WordPress", "Shopify", "TypeScript", "HTML5", "CSS3", "JavaScript"],
        icon: "globe"
    },
    {
        category: "Backend & Cloud",
        items: ["Supabase", "Firebase", "Appwrite", "PocketBase", "Cloudflare R2", "ImageKit", "Node.js"],
        icon: "cloud"
    },
    {
        category: "Tools & DevOps",
        items: ["Android Studio", "Git & GitHub", "VS Code", "Postman", "MS Office Suite", "Figma"],
        icon: "tool"
    },
];

function Card({ skillGroup, index }: { skillGroup: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="group relative glass rounded-xl px-4 py-6 sm:px-8 sm:py-8 hover:border-indigo-500/50 transition-all duration-300 card-hover"
        >
            {/* Modern Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500/50 group-hover:border-indigo-500 transition-colors" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-500/50 group-hover:border-indigo-500 transition-colors" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-500/50 group-hover:border-indigo-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 group-hover:border-indigo-500 transition-colors" />

            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(99, 102, 241, 0.1),
                          transparent 80%
                        )
                      `,
                }}
            />
            <div className="relative">
                <h3 className="text-xl font-bold font-mono text-emerald-400 mb-6 border-b border-white/5 pb-4">
                    &lt;{skillGroup.category} /&gt;
                </h3>
                <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item: string) => (
                        <span
                            key={item}
                            className="bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 px-3 py-1.5 text-xs font-mono transition-all border border-indigo-500/30 hover:border-indigo-500/60 rounded-md cursor-default"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-zinc-950/50 relative overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Proficiency</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A robust set of technologies I leverage to build scalable, high-performance web and mobile applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skillGroup, index) => (
                        <Card key={skillGroup.category} skillGroup={skillGroup} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
