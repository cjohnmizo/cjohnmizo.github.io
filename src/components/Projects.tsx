"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { MouseEvent, useRef } from "react";

const projects = [
    {
        title: "Liankhawpui",
        description: "A community-focused directory and news application designed for Khawlian Village. This project bridges the information gap by providing local news, emergency contacts, and a business directory for the community.",
        tags: ["Flutter", "Firebase", "Android", "Community Tech"],
        image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        github: "#",
        demo: "#",
    },
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers. Features include real-time analytics, dark mode, and responsive design.",
        tags: ["React", "Next.js", "Tailwind CSS", "Recharts"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        github: "#",
        demo: "#",
    },
    {
        title: "Social Media App",
        description: "A full-featured social media application with real-time messaging, post sharing, and user profiles. Built with a focus on performance and scalability.",
        tags: ["TypeScript", "Node.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        github: "#",
        demo: "#",
    },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative bg-zinc-950 border border-white/5 overflow-hidden transition-colors duration-300"
        >
            {/* Tech Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500/50 z-20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500/50 z-20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500/50 z-20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500/50 z-20" />

            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
                <div className="absolute inset-0 bg-emerald-500/5 blur-2xl rounded-full" />
            </div>

            <div className="relative h-48 overflow-hidden" style={{ transform: "translateZ(50px)" }}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 border-y border-emerald-500/20">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-900 rounded-none hover:bg-emerald-500 text-emerald-500 hover:text-zinc-900 transition-all border border-emerald-500"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-900 rounded-none hover:bg-emerald-500 text-emerald-500 hover:text-zinc-900 transition-all border border-emerald-500"
                    >
                        <ExternalLink className="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div className="p-4 sm:p-6" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-xl font-bold font-mono text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}_
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-6 line-clamp-3 leading-relaxed font-mono border-l-2 border-white/10 pl-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs font-mono font-medium px-2 py-1 bg-emerald-900/20 text-emerald-400 border border-emerald-500/20"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-zinc-900 perspective-1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400">Highlighting my work in mobile and web development.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
