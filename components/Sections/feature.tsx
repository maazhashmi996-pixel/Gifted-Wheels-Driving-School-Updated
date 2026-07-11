"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, MapPin, Clock } from "lucide-react";

const featuresData = {
    leftColumn: [
        {
            subheading: "ADULT AND TEEN",
            title: "Driving Lessons",
            desc: "Comprehensive driving lessons tailored for all skill levels. We specialize in training nervous and anxious drivers, helping you build confidence for the road test.",
            icon: <Users className="w-5 h-5 text-[#FDBF2A]" />,
            isLarge: true,
            delay: 0.2,
        },
        {
            subheading: "COMPLIMENTARY SERVICE",
            title: "Pick & Drop",
            desc: "Free pick and drop available in Carrollton, Plano, Frisco, and The Colony. Call for charges for other areas.",
            icon: <MapPin className="w-5 h-5 text-[#FDBF2A]" />,
            isLarge: false,
            delay: 0.6,
        },
    ],
    rightColumn: [
        {
            subheading: "EXTRA PROTECTION",
            title: "Dual Brake Safety",
            desc: "Our vehicles feature dual-brake systems providing an added layer of safety and reassurance during every lesson.",
            icon: < ShieldCheck className="w-5 h-5 text-[#FDBF2A]" />,
            delay: 0.4,
        },
        {
            subheading: "1 OR 2 HOUR CLASSES",
            title: "Flexible Sessions",
            desc: "1-hour lessons available in Carrollton, Plano, Frisco, and The Colony. All other areas require 2-hour sessions if pick and drop is needed.",
            icon: <Clock className="w-5 h-5 text-[#FDBF2A]" />,
            delay: 0.8,
        },
    ],
};

const Feature = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <span className="text-[#FDBF2A] font-bold text-sm tracking-widest uppercase block mb-2">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-[48px] leading-[1.2] font-extrabold text-[#0A1C3C] tracking-tight">
                        Confidence Starts Here
                        <span className="text-[#FDBF2A] block mt-1">Premium Training</span>
                    </h2>
                </motion.div>

                {/* Asymmetric Grid Layout */}
                <div className="flex flex-col md:flex-row gap-5">

                    {/* Left Column (63% Width) */}
                    <div className="w-full md:w-[63%] flex flex-col gap-5">
                        {featuresData.leftColumn.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.8 }}
                                whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(10, 28, 60, 0.05)" }}
                                className={`bg-[#F8FAFC] border border-[#E8EDF2] rounded-2xl p-8 transition-shadow duration-300 flex flex-col ${item.isLarge ? "flex-grow" : ""
                                    }`}
                            >
                                <div className="w-14 h-14 bg-white border border-[#E8EDF2] rounded-xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <span className="text-[#FDBF2A] font-bold text-sm tracking-wider uppercase mb-3">
                                    {item.subheading}
                                </span>
                                <h3 className="text-2xl font-extrabold text-[#0A1C3C] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#505F77] text-base font-normal leading-relaxed max-w-[95%]">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column (Remaining Width) */}
                    <div className="w-full md:flex-1 flex flex-col gap-5">
                        {featuresData.rightColumn.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.8 }}
                                whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(10, 28, 60, 0.05)" }}
                                className="bg-[#F8FAFC] border border-[#E8EDF2] rounded-2xl p-8 transition-shadow duration-300 flex flex-col flex-1"
                            >
                                <div className="w-14 h-14 bg-white border border-[#E8EDF2] rounded-xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <span className="text-[#FDBF2A] font-bold text-sm tracking-wider uppercase mb-3">
                                    {item.subheading}
                                </span>
                                <h3 className="text-2xl font-extrabold text-[#0A1C3C] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#505F77] text-base font-normal leading-relaxed max-w-[95%]">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Bottom Call to Action Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="bg-[#0B1325] rounded-[2.5rem] p-10 md:p-12 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white text-3xl font-bold tracking-tight">
                            Ready for your Road Test?
                        </h3>
                        <p className="text-slate-400 text-base italic font-medium max-w-[550px]">
                            &ldquo;Driving Lessons designed to build confidence and prepare you for your DPS road test- including parallel parking and key test maneuvers.
                            &rdquo;
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FDBF2A] hover:bg-[#e2aa22] text-[#0A1C3C] font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 self-start md:self-auto shrink-0 shadow-lg"
                    >
                        Get Started Now
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default Feature;