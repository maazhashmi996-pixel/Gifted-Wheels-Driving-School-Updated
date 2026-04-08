"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion'; // Variants type yahan se aayegi
import { ShieldCheck, Award, Users } from 'lucide-react';

const AboutUs = () => {
    // Types add kar di hain taakay red line na aaye
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl" />
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="/about.jpeg"
                                alt="About"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        variants={containerVariants} // Yahan red line nahi aayegi ab
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Story</span>
                            <h2 className="text-5xl font-black text-slate-900 mt-5">About <span className="text-blue-600">Us</span></h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                Welcome to **Gifted Wheels Driving School**, proudly owned and operated by women. Our team brings **45 years of teaching expertise**.
                            </p>
                            <p className="text-lg text-slate-600 font-medium">
                                Serving Carrollton, Frisco, Plano, and surrounding areas with dual-brake safety.
                            </p>
                        </motion.div>

                        {/* Icons Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
                            {[
                                { icon: <Users />, title: "45 Years", sub: "Experience" },
                                { icon: <ShieldCheck />, title: "Dual Brake", sub: "Safety" },
                                { icon: <Award />, title: "Female Led", sub: "Expertise" },
                            ].map((pillar, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900">{pillar.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{pillar.sub}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;