"use client";

import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className="py-8 bg-zinc-950 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold font-mono text-white tracking-tight">CJOHNMIZO</span>
                        <span className="text-gray-500 text-sm font-mono">© {new Date().getFullYear()}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/cjohnmizo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/c-john-remthang/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/john.changsan.9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/c.john_mizo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
