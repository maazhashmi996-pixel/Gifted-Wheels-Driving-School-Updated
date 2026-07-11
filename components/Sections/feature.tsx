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
            icon: <Users className="w-6 h-6 text-[#FDBF2A]" />,
            isLarge: true,
            delay: 0.2,
        },
        {
            subheading: "COMPLIMENTARY SERVICE",
            title: "Pick & Drop",
            desc: "Free pick and drop available in Carrollton, Plano, Frisco, and The Colony. Call for charges for other areas.",
            icon: <MapPin className="w-6 h-6 text-[#FDBF2A]" />,
            isLarge: false,
            delay: 0.6,
        },
    ],
    rightColumn: [
        {
            subheading: "EXTRA PROTECTION",
            title: "Dual Brake Safety",
            desc: "Our cars are equipped with dual brakes, ensuring an extra layer of safety and confidence for every learner.",
            icon: <ShieldCheck className="w-6 h-6 text-[#FDBF2A]" />,
            delay: 0.4,
        },
        {
            subheading: "1 OR 2 HOUR CLASSES",
            title: "Flexible Sessions",
            desc: "1-hour lessons available in Carrollton, Plano, Frisco, and The Colony. All other areas require 2-hour sessions if pick and drop is needed.",
            icon: <Clock className="w-6 h-6 text-[#FDBF2A]" />,
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
            </div>
        </section>
    );
};

export default Feature;