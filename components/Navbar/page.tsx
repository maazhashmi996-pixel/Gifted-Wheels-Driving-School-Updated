// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 bg-white/70 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tighter text-premium">
                    Gifted <span className="text-blue-600">Wheels</span>
                </h2>
                <ul className="hidden md:flex space-x-8 font-medium text-premium/80">
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="hover:text-blue-600 transition-colors">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="/contact" className="bg-premium text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform">
                    Get Started
                </Link>
            </div>
        </nav>
    );
}