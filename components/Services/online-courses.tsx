"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GraduationCap, Car, FileCheck, Mail, Phone } from 'lucide-react';

const OnlineCourses = () => {
    const data = [
        {
            title: "Teens (16-18 years old)", // [cite: 10]
            icon: <GraduationCap className="w-6 h-6" />,
            links: [
                { label: "Instructor Led (AMI)", url: "http://go.aceable.com/aff_c?offer_id=14&aff_id=2690" }, // [cite: 11, 12]
                { label: "Parent Taught Drivers Ed", url: "http://go.aceable.com/aff_c?offer_id=17&aff_id=2690" }, // [cite: 13, 14]
                { label: "Teens (ITTD) Impact Videos", url: "https://impacttexasdrivers.dps.texas.gov/" }, // [cite: 15, 16]
                { label: "Behind the Wheel Log Sheet", url: "https://www.tdlr.texas.gov/driver/files/Texas%2030-Hour%20Behind-the-Wheel%20Log.pdf" } // [cite: 17, 18]
            ]
        },
        {
            title: "Adults (18 and over)", // [cite: 19]
            icon: <Car className="w-6 h-6" />,
            links: [
                { label: "6-Hour Adult Course for Permit", url: "http://go.aceable.com/aff_c?offer_id=12&aff_id=2690" }, // [cite: 20, 21]
                { label: "Adults (ITYD) Impact Videos", url: "https://impacttexasdrivers.dps.texas.gov/" }, // [cite: 22, 23]
                { label: "Defensive Driving", url: "http://go.aceable.com/aff_c?offer_id=15&aff_id=2690" } // [cite: 24, 25]
            ]
        },
        {
            title: "License Info & Applications", // [cite: 26]
            icon: <FileCheck className="w-6 h-6" />,
            links: [
                { label: "How to Apply for Texas License", url: "https://www.dps.texas.gov/section/driver-license/apply-texas-driver-license" }, // [cite: 27, 28]
                { label: "Application (17y 10m and older)", url: "https://www.dps.texas.gov/internetforms/forms/dl-14a.pdf" }, // [cite: 29, 30]
                { label: "Application (Teens under 17y 10m)", url: "https://www.dps.texas.gov/internetforms/Forms/DL-14B.pdf" }, // [cite: 31, 32]
                { label: "Texas Drivers Handbook", url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf" }, // [cite: 33, 34]
                { label: "Texas Residency Form", url: "https://www.dps.texas.gov/internetforms/Forms/DL-5.pdf" } // [cite: 35, 36]
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-widest text-sm"
                    >
                        Texas Approved Driver Education [cite: 3]
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-8">
                        Online <span className="text-blue-600">Courses</span>
                    </h1>
                    <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
                        Welcome to our Texas Driver Education programs for teens and adults. [Carrollton] Whether you are ready to get your permit or kick off your driving courses, we have teamed up with **Aceable** to make things super easy for you. [Lewisville, Colony] Our self-paced online lessons can be done from the comfort of your own home. [Plano]
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {data.map((box, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                {box.icon}
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-8">
                                {box.title}
                            </h3>

                            <div className="space-y-4 flex-grow">
                                {box.links.map((link, j) => (
                                    <a
                                        key={j}
                                        href={link.url}
                                        target="_blank"
                                        className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all group/link font-bold text-slate-700"
                                    >
                                        <span className="text-sm">{link.label}</span>
                                        <ExternalLink className="w-4 h-4 text-blue-400 group-hover/link:text-blue-600 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Support Footer */}
                <div className="mt-20 text-center p-12 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-2xl font-black mb-4">Questions? We're Here to Help. [Carrollton, Lewisville,Colony, Plano, Frisco]</h4>
                        <p className="text-slate-400 mb-8 font-medium italic">Please reach out if you have any questions. [Carrollton, Lewisville,Colony, Plano, Frisco]</p>
                        <div className="flex flex-col md:flex-row justify-center gap-10">
                            <div className="flex items-center justify-center gap-3">
                                <Mail className="text-blue-400 w-5 h-5" />
                                <span className="font-bold">giftedwheelsdriving@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <Phone className="text-blue-400 w-5 h-5" />
                                <span className="font-bold">972-632-8113</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineCourses;