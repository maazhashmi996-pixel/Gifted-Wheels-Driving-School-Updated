"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Menu icons ke liye
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center group shrink-0">
                    <img
                        src="/Final logo.png"
                        alt="Gifted Wheels Logo"
                        className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-8 lg:space-x-10 font-bold text-white/90">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="hover:text-blue-400 transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="bg-white text-black px-6 py-2.5 lg:px-8 lg:py-3 rounded-2xl font-black text-xs lg:text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 shadow-md"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-8">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-bold hover:text-blue-400"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-white text-black px-6 py-3 rounded-xl font-black text-center uppercase tracking-widest text-sm"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}