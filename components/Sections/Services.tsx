"use client";
import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Lock, GraduationCap, ClipboardCheck, Send, Phone, Mail, MapPin, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        emailjs.init("dJy5lcU5bQFdS0xEb"); // ✅ Public Key
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        emailjs.sendForm("service_nu2j1lj", "template_np72a7t", form)
            .then(() => {
                alert("✅ Message sent successfully! Check your Gmail inbox.");
                form.reset();
                setIsModalOpen(false); // Close modal after sending
            })
            .catch((error: any) => {
                alert("❌ Failed to send message. Please try again.\nError: " + JSON.stringify(error));
            });
    };

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
            title: "Online Driver Education",
            desc: "Teen & Adults Welcome Earn Your Permit Online & Build the Skills You Need Before Behind-the-Wheel Training.",
            img: "/Online.png",
            icon: <GraduationCap className="w-5 h-5" />,
            link: "/services#online-classes",
            buttonText: "Schedule your lesson",
            status: "active"
        },
        {
            title: "NERVOUS TO ROAD-READY",
            subtitle: "Driving Lessons for Teens & Adults",
            desc: "Patient instruction. Real-world skills. Confidence behind the wheel.",
            img: "/Driving Lessons Adult and Teen.jpeg",
            icon: <GraduationCap className="w-5 h-5" />,
            buttonText: "Book Now",
            status: "active",
            isModalTrigger: true
        },
        {
            title: "Road-Ready For Test Day",
            desc: "Practice the skills examiners look for with structured lessons and expert guidance to help you feel prepared and confident.",
            img: "/Driving Test Prep Adult and Teen.webp",
            icon: <ClipboardCheck className="w-5 h-5" />,
            buttonText: "Explore Service",
            isModalTrigger: true,
            status: "active"
        },
    ];

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 text-slate-700 mb-6"
                    >
                        <span className="animate-pulse"><Sparkles className="w-4 h-4 text-yellow-600" /></span>
                        <span className="text-xs font-black uppercase tracking-widest">Our Expertise</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-slate-900"
                    >
                        Professional <span className="text-yellow-600">Services</span>
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
                                onClick={service.isModalTrigger ? () => setIsModalOpen(true) : undefined}
                                className="group relative h-[550px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl cursor-pointer"
                            >
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className={`w-full h-full object-cover transition-all duration-700 ${service.status === 'upcoming'
                                            ? 'opacity-30 grayscale'
                                            : 'opacity-60 group-hover:opacity-100'
                                            }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                </div>

                                {service.status === 'upcoming' && (
                                    <div className="absolute top-6 right-6 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 z-20">
                                        <Lock className="w-3 h-3" /> Coming Soon
                                    </div>
                                )}

                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                    <div className="mb-6 w-14 h-14 rounded-2xl bg-yellow-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                                        {service.title}
                                    </h3>

                                    {service.subtitle && (
                                        <h4 className="text-lg font-bold text-yellow-400 mt-2 leading-tight">
                                            {service.subtitle}
                                        </h4>
                                    )}

                                    <p className="text-slate-200 font-medium mb-8 line-clamp-3 group-hover:text-white transition-colors">
                                        {service.desc}
                                    </p>

                                    {service.status !== 'upcoming' && (
                                        <div className="flex items-center gap-5 flex-wrap">
                                            {/* Book Now */}
                                            <div className="inline-flex items-center gap-3 text-yellow-400 font-black uppercase tracking-widest text-sm group/btn">
                                                {service.buttonText}

                                                <div className="w-10 h-10 rounded-full border border-yellow-400/30 flex items-center justify-center group-hover/btn:bg-yellow-600 group-hover/btn:border-yellow-600 transition-all">
                                                    <ArrowRight className="w-5 h-5 text-white" />
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>

                                <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-yellow-500/50 rounded-[3rem] transition-all duration-500 z-30 pointer-events-none" />
                            </motion.div>
                        );

                        if (service.isModalTrigger) {
                            return <div key={i}>{CardContent}</div>;
                        }

                        return service.status === 'active' && service.link ? (
                            <Link key={i} href={service.link}>
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={i}>{CardContent}</div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Popup for Card 2 & 3 */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-xl w-full relative my-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 text-slate-600 hover:bg-yellow-500 hover:text-white rounded-full flex items-center justify-center transition-all z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-6 pr-12">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="text-3xl font-black text-slate-900">
                                        Book Your <span className="text-yellow-500">Lesson</span>
                                    </h3>

                                    {/* Direct Dialing Link */}
                                    <a
                                        href="tel:9726328113"
                                        className="inline-flex items-center gap-1.5 text-sm font-black text-slate-700 hover:text-yellow-600 transition-colors bg-slate-100 hover:bg-yellow-50 px-3 py-1.5 rounded-xl border border-slate-200"
                                    >
                                        <Phone className="w-3.5 h-3.5 text-yellow-600" />
                                        972-632-8113
                                    </a>
                                </div>

                                <p className="text-sm text-slate-600 font-medium">
                                    Fill in the details below to schedule your driving lesson with us.
                                </p>
                            </div>

                            <form id="contactForm" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400 text-sm"
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400 text-sm"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400 text-sm"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Telephone Number"
                                        className="w-full px-5 py-3.5 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400 text-sm"
                                    />
                                </div>

                                <textarea
                                    rows={3}
                                    name="message"
                                    placeholder="Your Message or Preferred Schedule"
                                    required
                                    className="w-full px-5 py-3.5 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium resize-none placeholder:text-slate-400 text-sm"
                                ></textarea>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 bg-yellow-500 text-white rounded-2xl font-black text-base shadow-[0_15px_30px_rgba(234,179,8,0.3)] hover:shadow-[0_20px_40px_rgba(234,179,8,0.5)] transition-all flex items-center justify-center gap-2 mt-2"
                                >
                                    Send Message <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;    