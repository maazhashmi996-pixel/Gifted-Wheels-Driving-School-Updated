"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Car, Compass, ParkingCircle, ShieldCheck, ClipboardCheck } from 'lucide-react';

const RoadTest = () => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const testFeatures = [
        {
            title: "Driving Test Practice",
            desc: "Get real-world practice with certified instructors. Learn to stay calm, focused, and confident under actual test conditions.",
            icon: <Compass className="w-8 h-8" />,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "Official Road Test",
            desc: "Perform your official test using our dual-brake vehicles with full support. Fees for teens and adults are competitive.",
            icon: <Car className="w-8 h-8" />,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
            badge: "Contact for Pricing"
        },
        {
            title: "Parallel Parking",
            desc: "Master the art of parallel parking with simple, repeatable techniques designed to help you pass with zero stress.",
            icon: <ParkingCircle className="w-8 h-8" />,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            title: "Full Test Insurance",
            desc: "All our vehicles are fully insured for testing purposes. You are always covered and secure while taking your road test.",
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "text-rose-600",
            bgColor: "bg-rose-50"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* VIP Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3 READ %3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4"
                        >
                            <ClipboardCheck className="w-5 h-5" />
                            Certification Prep
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-black text-slate-900 leading-tight"
                        >
                            Your Path to a <br />
                            <span className="text-blue-600 italic">Drivers License</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 font-medium text-lg max-w-sm border-l-4 border-blue-100 pl-6"
                    >
                        We prepare you for the official road test during lessons, ensuring you master every step with confidence.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testFeatures.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group p-8 md:p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className={`w-16 h-16 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-500`}>
                                    {item.icon}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                                        {item.badge && (
                                            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Modern Arrow Icon for Hover */}
                            <div className="absolute bottom-8 right-8 text-slate-200 group-hover:text-blue-500 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadTest;