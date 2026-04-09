"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            title: "Quick Session",
            duration: "1 hour lesson",
            price: "55",
            recommended: false
        },
        {
            title: "Pro Session",
            duration: "2 hour lesson",
            price: "100",
            recommended: true
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                        Simple & <span className="text-blue-600">Transparent</span> Pricing
                    </h2>
                    <p className="text-slate-500 font-medium text-lg">
                        Invest in your safety with our expert-led driving sessions.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`relative p-10 rounded-[3rem] border-2 transition-all duration-500 ${plan.recommended
                                ? "bg-slate-900 text-white border-slate-900 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)]"
                                : "bg-white text-slate-900 border-slate-100 shadow-xl shadow-slate-200/50"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.recommended ? "bg-blue-600" : "bg-blue-50 text-blue-600"}`}>
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className={`text-xl font-bold ${plan.recommended ? "text-blue-400" : "text-slate-500"}`}>
                                    {plan.title}
                                </h3>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl md:text-6xl font-black italic">$</span>
                                    <span className="text-6xl md:text-7xl font-black tracking-tighter">{plan.price}</span>
                                </div>

                                {/* SIMPLE TEXT (Client Requirement) */}
                                <p className={`font-bold mt-4 text-lg ${plan.recommended ? "text-slate-300" : "text-slate-600"}`}>
                                    {plan.duration} ${plan.price}
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className={`w-full py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 transition-all duration-300 group ${plan.recommended
                                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                                    : "bg-slate-900 hover:bg-blue-600 text-white"
                                    }`}
                            >
                                Book This Lesson
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* VIP Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                            ))}
                        </div>
                        <p className="text-slate-600 font-bold text-sm">
                            Join 500+ confident drivers in Carrollton!
                        </p>
                        <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />
                        <a href="tel:9726328113" className="text-blue-600 font-black hover:underline">
                            Call 972-632-8113
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;