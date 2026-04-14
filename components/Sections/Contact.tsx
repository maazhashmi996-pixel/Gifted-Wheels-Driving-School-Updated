"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

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
            })
            .catch((error: any) => {
                alert("❌ Failed to send message. Please try again.\nError: " + JSON.stringify(error));
            });
    };

    return (
        <section id="contact" className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Shapes */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-100 rounded-full blur-3xl -z-10 opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                                Get in <span className="text-yellow-500">Touch</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium max-w-md leading-relaxed">
                                Ready to start your journey? Send us a message and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <Phone className="w-5 h-5" />, label: "Call Us", val: "972-632-8113" },
                                { icon: <Mail className="w-5 h-5" />, label: "Email", val: "Giftedwheelsdriving@gmail.com" },
                                { icon: <MapPin className="w-5 h-5" />, label: "Location", val: "Carrollton, Texas" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        <p className="text-slate-900 font-bold">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 relative"
                    >
                        <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="First Name"
                                    required
                                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400"
                                />
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Last Name"
                                    required
                                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400"
                                />
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Telephone Number"

                                    className="w-full px-6 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium placeholder:text-slate-400"
                                />
                            </div>

                            <textarea
                                rows={4}
                                name="message"
                                placeholder="Your Message"
                                required
                                className="w-full px-6 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-medium resize-none placeholder:text-slate-400"
                            ></textarea>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-5 bg-yellow-500 text-white rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(234,179,8,0.3)] hover:shadow-[0_25px_50px_rgba(234,179,8,0.5)] transition-all flex items-center justify-center gap-3"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contacts;