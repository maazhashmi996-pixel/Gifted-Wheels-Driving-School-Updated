"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 bg-black/80 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/Final logo.png"
                        alt="Gifted Wheels Logo"
                        className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Navigation Links - Text Color set to White */}
                <ul className="hidden md:flex items-center space-x-10 font-bold text-white/90">
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="hover:text-blue-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* White Styled CTA Button - BG White, Text Black */}
                <Link
                    href="/contact"
                    className="bg-white text-black px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95"
                >
                    Get Started
                </Link>

            </div>
        </nav>
    );
}