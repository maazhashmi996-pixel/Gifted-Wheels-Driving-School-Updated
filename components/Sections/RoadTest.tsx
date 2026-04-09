"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Road, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
        isSpecial: true
    },
    {
        title: "Safety & Confidence",
        desc: "We focus on building the skills needed to handle any road situation with complete peace of mind.",
        icon: <CheckCircle2 className="w-8 h-8" />,
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

                {/* Header Section - Client's New Text Integrated */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block"
                    >
                        Ready for Road Test
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight"
                    >
                        The <span className="text-blue-600">Road Test</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-700 font-bold leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm"
                    >
                        Learn rules, signs, signals and parallel parking becoming confident drivers ready for the road in our dual brake vehicles.
                    </motion.p>
                </div>

                {/* Grid Section - Parallel Parking box removed and replaced with Safety */}
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
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-inner transition-transform duration-500 group-hover:rotate-6`}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
                                {item.desc}
                            </p>

                            {item.isSpecial && (
                                <Link href="/contact" className="text-blue-600 font-bold text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
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
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 p-3 pl-8 bg-white rounded-[2.5rem] md:rounded-full shadow-xl border border-slate-100">
                        <span className="text-slate-700 font-black tracking-tight">Passing your test is just a click away</span>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-lg active:scale-95"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default RoadTest;