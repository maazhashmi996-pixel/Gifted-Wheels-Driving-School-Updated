"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Lock, GraduationCap, ClipboardCheck } from 'lucide-react';

const Services = () => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        })
    };

    const services = [
        {
            title: "Online Classes for Teens & Adults",
            desc: "Flexible online classes designed to help teens and adults start their driving journey from the comfort of home.",
            img: "/Online.png",
            icon: <GraduationCap className="w-5 h-5" />,
            link: "/services",
            status: "active"
        },
        {
            title: "Driving Lessons: Adult & Teen",
            desc: "Learn to drive and build confidence in a safe, supportive environment, getting you ready for your road test.",
            img: "/Driving Lessons Adult and Teen.jpeg",
            icon: <GraduationCap className="w-5 h-5" />,
            link: "/services",
            status: "active"
        },
        {
            title: "Driving Test Prep: Adult & Teen",
            desc: "Prepare for your driving test with structured lessons and expert guidance to pass with confidence.",
            img: "/Driving Test Prep Adult and Teen.webp",
            icon: <ClipboardCheck className="w-5 h-5" />,
            link: "/services",
            status: "active"
        },
        {
            title: "Classroom Courses (Coming Soon)",
            desc: "Advanced online and in-classroom theory courses tailored for modern driving standards.",
            img: "/Online and In classroom Courses Adult and Teen(Coming Soon).webp",
            icon: <Lock className="w-5 h-5" />,
            link: "#",
            status: "upcoming"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6"
                    >
                        <span className="animate-pulse"><Sparkles className="w-4 h-4" /></span>
                        <span className="text-xs font-black uppercase tracking-widest">Our Expertise</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-slate-900"
                    >
                        Professional <span className="text-blue-600">Services</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, i) => {
                        const CardContent = (
                            <motion.div
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -15 }}
                                className="group relative h-[550px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl cursor-pointer"
                            >
                                {/* Image Layer */}
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className={`w-full h-full object-cover transition-all duration-700 ${service.status === 'upcoming' ? 'opacity-30 grayscale' : 'opacity-60 group-hover:opacity-100'}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                </div>

                                {service.status === 'upcoming' && (
                                    <div className="absolute top-6 right-6 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 z-20">
                                        <Lock className="w-3 h-3" /> Coming Soon
                                    </div>
                                )}

                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                    <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-200 font-medium mb-8 line-clamp-3 group-hover:text-white transition-colors">
                                        {service.desc}
                                    </p>

                                    {service.status !== 'upcoming' && (
                                        <div className="inline-flex items-center gap-3 text-blue-400 font-black uppercase tracking-widest text-sm group/btn">
                                            Explore Service
                                            <div className="w-10 h-10 rounded-full border border-blue-400/30 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:border-blue-600 transition-all">
                                                <ArrowRight className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-blue-500/50 rounded-[3rem] transition-all duration-500 z-30 pointer-events-none" />
                            </motion.div>
                        );

                        return service.status === 'active' ? (
                            <Link key={i} href={service.link}>
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={i}>{CardContent}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;