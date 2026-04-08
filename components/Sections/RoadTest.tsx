"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Road, ParkingCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const roadTestData = [
    {
        title: "Driving Test Practice",
        desc: "Get real-world practice with certified instructors. Learn to stay calm, focused, and confident under test conditions.",
        icon: <Car className="w-8 h-8" />,
        color: "bg-blue-50"
    },
    {
        title: "Driving Road Test",
        desc: "Perform your official test using our dual-brake vehicles with full support. Fee for teens and adults applies.",
        icon: <Road className="w-8 h-8" />,
        color: "bg-indigo-50",
        isSpecial: true // Pricing highlight
    },
    {
        title: "Parallel Parking",
        desc: "Master the art of parallel parking with simple, repeatable techniques designed to help you pass the first time.",
        icon: <ParkingCircle className="w-8 h-8" />,
        color: "bg-cyan-50"
    },
    {
        title: "Insurance Covered",
        desc: "All our vehicles are fully insured for testing purposes — so you’re always secure while taking the test.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "bg-emerald-50"
    }
];

const RoadTest = () => {
    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        The <span className="text-blue-600">Road Test</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 font-medium leading-relaxed"
                    >
                        We prepare you for the official road test during your lessons.
                        Our instructors ensure you master every step before you even start the engine for your test.
                    </motion.p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roadTestData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-inner`}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
                                {item.desc}
                            </p>

                            {item.isSpecial && (
                                <Link href="/contact" className="text-blue-600 font-bold text-xs uppercase tracking-widest hover:underline">
                                    Contact for Pricing
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 p-2 pl-6 bg-white rounded-full shadow-lg border border-slate-100">
                        <span className="text-slate-600 font-bold">Passing your test is just a click away</span>
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default RoadTest;