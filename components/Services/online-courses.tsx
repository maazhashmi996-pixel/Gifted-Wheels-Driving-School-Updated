"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GraduationCap, Car, FileCheck } from 'lucide-react';

const OnlineCourses = () => {
    const data = [
        {
            title: "Teens (16-18 years old)", // [cite: 10]
            icon: <GraduationCap className="w-6 h-6" />,
            links: [
                { label: "Instructor Led (AMI)", url: "http://go.aceable.com/aff_c?offer_id=14&aff_id=2690" }, // [cite: 11, 12]
                { label: "Parent Taught Drivers Ed", url: "http://go.aceable.com/aff_c?offer_id=17&aff_id=2690" }, // [cite: 13, 14]
                { label: "ITTD Impact Videos (Required)", url: "https://impacttexasdrivers.dps.texas.gov/" }, // [cite: 15, 16]
                { label: "Behind the Wheel Log (30-Hour)", url: "https://www.tdlr.texas.gov/driver/files/Texas%2030-Hour%20Behind-the-Wheel%20Log.pdf" } // [cite: 17, 18]
            ]
        },
        {
            title: "Adults (18 and over)", // [cite: 19]
            icon: <Car className="w-6 h-6" />,
            links: [
                { label: "6-Hour Adult Course for Permit", url: "http://go.aceable.com/aff_c?offer_id=12&aff_id=2690" }, // [cite: 20, 21]
                { label: "ITYD Impact Videos (Required)", url: "https://impacttexasdrivers.dps.texas.gov/" }, // [cite: 22, 23]
                { label: "Defensive Driving", url: "http://go.aceable.com/aff_c?offer_id=15&aff_id=2690" } // [cite: 24, 25]
            ]
        },
        {
            title: "License Information", // [cite: 26]
            icon: <FileCheck className="w-6 h-6" />,
            links: [
                { label: "How to Apply for Texas License", url: "https://www.dps.texas.gov/section/driver-license/apply-texas-driver-license" }, // [cite: 27, 28]
                { label: "Application (17y 10m+)", url: "https://www.dps.texas.gov/internetforms/forms/dl-14a.pdf" }, // [cite: 29, 30]
                { label: "Application (Teens < 17y 10m)", url: "https://www.dps.texas.gov/internetforms/Forms/DL-14B.pdf" }, // [cite: 31, 32]
                { label: "Texas Drivers Handbook", url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf" }, // [cite: 33, 34]
                { label: "Texas Residency Form", url: "https://www.dps.texas.gov/internetforms/Forms/DL-5.pdf" } // [cite: 35, 36]
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* VIP Header Section */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-widest text-sm"
                    >
                        Official Driver Education [cite: 1]
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-8">
                        Online <span className="text-blue-600">Courses</span>
                    </h1>
                    <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
                        Whether you are ready to get your permit or kick off your driving courses, we are here to help! [cite: 2]
                        We have teamed up with **Aceable** to offer Texas approved programs that are flexible, self-paced,
                        and can be done from the comfort of your home. [cite: 3, 4]
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

                            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">
                                {box.title}
                            </h3>

                            <div className="space-y-4 flex-grow">
                                {box.links.map((link, j) => (
                                    <a
                                        key={j}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all group/link font-bold text-slate-700"
                                    >
                                        <span className="text-sm">{link.label}</span>
                                        <ExternalLink className="w-4 h-4 text-blue-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Support Footer */}
                <div className="mt-20 text-center p-10 rounded-[3rem] bg-slate-900 text-white">
                    <h4 className="text-2xl font-bold mb-4">Need help with your courses?</h4>
                    <p className="text-slate-400 mb-6 font-medium">Please reach out if you have any questions.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-8 font-black tracking-widest text-sm">
                        <span className="text-blue-400 uppercase">Email: <span className="text-white">giftedwheelsdriving@gmail.com</span></span> [cite: 5]
                        <span className="text-blue-400 uppercase">Phone: <span className="text-white">972-632-8113</span></span> [cite: 5]
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineCourses;