"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Clock,
    ShieldCheck,
    Zap,
    Headphones,
    MapPin,
    Mail,
    Phone,
    Shield
} from 'lucide-react';

// Iska naam ContactPage rakha hai taakay aapka import error khatam ho jaye
const ContactPage = ({ children }: { children?: React.ReactNode }) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- SECTION 1: VIP HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm"
                        >
                            Contact Center
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-slate-900 mt-4 leading-tight"
                        >
                            Always Here <br />
                            <span className="text-blue-600">When You Need Us.</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 font-medium text-lg max-w-sm border-l-4 border-blue-100 pl-6 mb-2"
                    >
                        Gifted Wheels empowers you to drive with skill, safety, and confidence. Our support team is active 24/7.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* --- SECTION 2: LEFT SIDE (INFO & GUIDELINES) --- */}
                    <div className="lg:col-span-5 space-y-12">

                        {/* Quick Contact Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { icon: <Phone />, label: "Direct Line", val: "972-632-8113", color: "blue" },
                                { icon: <Mail />, label: "Support Email", val: "giftedwheels@gmail.com", color: "indigo" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                                    <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        <p className="text-xl font-black text-slate-900">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* VIP Guidelines / Support Module */}
                        <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
                            <Zap className="absolute -right-4 -top-4 w-32 h-32 text-white/5 -rotate-12" />

                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <Headphones className="text-blue-400" />
                                Support Guidelines
                            </h3>

                            <div className="space-y-6">
                                {[
                                    { title: "24/7 Availability", desc: "Our female-led team is available around the clock for booking inquiries." },
                                    { title: "Fast Response", desc: "Average response time for all messages is under 30 minutes." },
                                    { title: "Safety Protocol", desc: "All inquiries are handled with strict privacy and safety guidelines." }
                                ].map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-blue-100">{point.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Status</p>
                                    <p className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        Systems Operational
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <ShieldCheck className="text-blue-400 w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- SECTION 3: RIGHT SIDE (FORM AREA) --- */}
                    <div className="lg:col-span-7">
                        <div className="relative p-1 rounded-[3.5rem] bg-gradient-to-b from-slate-100 to-white shadow-2xl">
                            <div className="bg-white rounded-[3.2rem] p-8 md:p-12">
                                <div className="mb-10">
                                    <h3 className="text-3xl font-black text-slate-900 mb-2">Send a Message</h3>
                                    <p className="text-slate-500 font-medium italic">We typically respond within an hour.</p>
                                </div>

                                <div className="vip-form-wrapper">
                                    {/* Agar page.tsx mein iske beech kuch likhoge toh yahan show hoga */}
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- SECTION 4: AREA MAP HIGHLIGHT --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-8 rounded-[3rem] bg-blue-50/50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black text-slate-900">Serving Local Communities</h4>
                            <p className="text-slate-600 font-medium">Carrollton, Frisco, Plano, McKinney, Allen, and Little Elm.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactPage;