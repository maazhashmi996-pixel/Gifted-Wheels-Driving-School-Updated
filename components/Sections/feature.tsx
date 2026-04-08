"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, MapPin, Clock, Users } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        title: "Driving Lessons",
        subtitle: "Adult and Teen",
        desc: "Comprehensive classes tailored for all skill levels. From basics to advanced road confidence, we cover it all.",
        icon: <Users className="w-6 h-6" />,
        colSpan: "md:col-span-2"
    },
    {
        title: "Dual Brake Safety",
        subtitle: "Extra Protection",
        desc: "Our cars are equipped with dual brakes, ensuring an extra layer of safety and confidence for every learner.",
        icon: <ShieldCheck className="w-6 h-6" />,
        colSpan: "md:col-span-1"
    },
    {
        title: "Pick & Drop",
        subtitle: "Complimentary Service",
        desc: "Free pick-up and drop-off within 20 mins of Carrollton. Convenience delivered to your doorstep at no extra charge.",
        icon: <MapPin className="w-6 h-6" />,
        colSpan: "md:col-span-1"
    },
    {
        title: "Flexible Sessions",
        subtitle: "1 or 2 Hour Classes",
        desc: "Choose between 1-hour or 2-hour sessions. For locations 20-30 mins away, we offer dedicated 2-hour intensive classes.",
        icon: <Clock className="w-6 h-6" />,
        colSpan: "md:col-span-2"
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mt-4"
                    >
                        Master the Road with <br /> <span className="text-blue-600">Premium Training</span>
                    </motion.h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`${feature.colSpan} p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group`}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 text-blue-600">
                                {feature.icon}
                            </div>

                            <h4 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
                                {feature.subtitle}
                            </h4>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 md:p-12 rounded-[3rem] bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="max-w-xl text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for your Road Test?</h3>
                        <p className="text-slate-400 font-medium italic">
                            "Driving Lessons will prepare you for the road test which includes parallel parking."
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all whitespace-nowrap"
                    >
                        Get Started Now
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Features;