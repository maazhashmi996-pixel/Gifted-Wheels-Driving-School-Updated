"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GraduationCap, Car, FileCheck, Mail, Phone } from 'lucide-react';

const OnlineCourses = () => {
    const data = [
        {
            title: "Teens (16-18 years old)",
            icon: <GraduationCap className="w-6 h-6" />,
            links: [
                { label: "Instructor Led (AMI)", url: "http://go.aceable.com/aff_c?offer_id=14&aff_id=2690" },
                { label: "Parent Taught Drivers Ed", url: "http://go.aceable.com/aff_c?offer_id=17&aff_id=2690" },
                { label: "Teens (ITTD) Impact Videos", url: "https://impacttexasdrivers.dps.texas.gov/" },
                { label: "Behind the Wheel Log Sheet", url: "https://www.tdlr.texas.gov/driver/files/Texas%2030-Hour%20Behind-the-Wheel%20Log.pdf" }
            ]
        },
        {
            title: "Adults (18 and over)",
            icon: <Car className="w-6 h-6" />,
            links: [
                { label: "6-Hour Adult Course for Permit", url: "http://go.aceable.com/aff_c?offer_id=12&aff_id=2690" },
                { label: "Adults (ITYD) Impact Videos", url: "https://impacttexasdrivers.dps.texas.gov/" },
                { label: "Defensive Driving", url: "http://go.aceable.com/aff_c?offer_id=15&aff_id=2690" }
            ]
        },
        {
            title: "License Info & Applications",
            icon: <FileCheck className="w-6 h-6" />,
            links: [
                { label: "How to Apply for Texas License", url: "https://www.dps.texas.gov/section/driver-license/apply-texas-driver-license" },
                { label: "Application (17y 10m and older)", url: "https://www.dps.texas.gov/internetforms/forms/dl-14a.pdf" },
                { label: "Application (Teens under 17y 10m)", url: "https://www.dps.texas.gov/internetforms/Forms/DL-14B.pdf" },
                { label: "Texas Drivers Handbook", url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf" },
                { label: "Texas Residency Form", url: "https://www.dps.texas.gov/internetforms/Forms/DL-5.pdf" }
            ]
        }
    ];

    return (
        <section className="py-24 bg-amber-50 min-h-screen relative overflow-hidden">

            {/* Yellow Glow Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-30" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-amber-600 font-black uppercase tracking-widest text-sm"
                    >
                        Texas Approved Driver Education
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-8">
                        Online <span className="text-amber-600">Courses</span>
                    </h1>

                    <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
                        Welcome to our Texas Driver Education programs for teens and adults. Carrollton Whether you are ready to get your permit or kick off your driving courses, we have teamed up with **Aceable** to make things super easy for you. Lewisville, Colony Our self-paced online lessons can be done from the comfort of your own home. Plano
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {data.map((box, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-amber-100/40 border border-amber-100 flex flex-col group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
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
                                        className="flex items-center justify-between p-5 rounded-2xl bg-amber-50 border border-transparent hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all group/link font-bold text-slate-700"
                                    >
                                        <span className="text-sm">{link.label}</span>
                                        <ExternalLink className="w-4 h-4 text-amber-500 group-hover/link:text-amber-700 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-20 text-center p-12 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-amber-500/10" />

                    <div className="relative z-10">
                        <h4 className="text-2xl font-black mb-4">
                            Questions? We're Here to Help. Carrollton, Lewisville, Colony, Plano, Frisco
                        </h4>

                        <p className="text-slate-300 mb-8 font-medium italic">
                            Please reach out if you have any questions. Carrollton, Lewisville,Colony, Plano, Frisco
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-10">
                            <div className="flex items-center justify-center gap-3">
                                <Mail className="text-amber-400 w-5 h-5" />
                                <span className="font-bold">giftedwheelsdriving@gmail.com</span>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <Phone className="text-amber-400 w-5 h-5" />
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