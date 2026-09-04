"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Car,
    FileCheck,
    Mail,
    Phone,
    ExternalLink,
} from "lucide-react";

const OnlineCourses = () => {
    const data = [
        {
            title: "Teens (15-18 years old)",
            icon: <GraduationCap className="w-6 h-6" />,
            links: [
                {
                    label: "Instructor Led (AMI)",
                    url: "https://getdriversed.com/courses-details/texas-teen-drivers-ed-course-instructor-taught?token=8td1hz1uc7akyj7x6S8R3NC0gsleT0vArKi675qGFD01LJ9bBQ8IOfMmnP2pHwE9o46",
                },
                {
                    label: "Parent Taught Drivers Ed",
                    url: "https://getdriversed.com/courses-details/texas-teen-drivers-ed-course-parent-taught?token=yzeb2MI8A1Kplmk70L3d4SgH8Jqh5st0roO6PED9CvniujN397GB7a0w1cFQfT6R16x",
                },
                {
                    label: "Teens (ITTD) Impact Videos",
                    url: "https://impacttexasdrivers.dps.texas.gov/",
                },
                {
                    label: "Behind the Wheel Log Sheet",
                    url: "https://www.tdlr.texas.gov/driver/files/Texas%2030-Hour%20Behind-the-Wheel%20Log.pdf",
                },
            ],
        },
        {
            title: "Adults (18 and over)",
            icon: <Car className="w-6 h-6" />,
            links: [
                {
                    label: "6-Hour Adult Course for Permit",
                    url: "https://getdriversed.com/courses-details/adult-drivers-ed-texas?token=y84HDOtsbiLM3Q7wGRcn93ev7N0xpm87JTuP06Kh0Sd5q1k1l762Fg9Eaj1ICBrAofz",
                },
                {
                    label: "Adults (ITYD) Impact Videos",
                    url: "https://impacttexasdrivers.dps.texas.gov/",
                },
                {
                    label: "Defensive Driving",
                    url: "https://getdriversed.com/courses-details/adult-drivers-ed-texas?token=y84HDOtsbiLM3Q7wGRcn93ev7N0xpm87JTuP06Kh0Sd5q1k1l762Fg9Eaj1ICBrAofz",
                },
            ],
        },
        {
            title: "License Info & Applications",
            icon: <FileCheck className="w-6 h-6" />,
            links: [
                {
                    label: "How to Apply for Texas License",
                    url: "https://www.dps.texas.gov/section/driver-license/apply-texas-driver-license",
                },
                {
                    label: "Application (17y 10m and older)",
                    url: "https://www.dps.texas.gov/internetforms/forms/dl-14a.pdf",
                },
                {
                    label: "Application (Teens under 17y 10m)",
                    url: "https://www.dps.texas.gov/internetforms/Forms/DL-14B.pdf",
                },
                {
                    label: "Texas Drivers Handbook",
                    url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
                },
                {
                    label: "Texas Residency Form",
                    url: "https://www.dps.texas.gov/internetforms/Forms/DL-5.pdf",
                },
            ],
        },
    ];

    return (
        <section className="py-24 bg-amber-50/50 min-h-screen relative overflow-hidden">
            {/* Glow Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-15" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-amber-700 font-black uppercase tracking-widest text-xs"
                    >
                        Texas-approved online driver education powered by Get Drivers Ed for teens and adults. Learn at your own pace from home.
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-8 max-w-2xl mx-auto leading-tight">
                        Online Driver <br />
                        <span className="text-amber-700">Education Made Easy</span>
                    </h1>

                    <div className="text-slate-700 max-w-3xl mx-auto font-medium text-lg leading-relaxed space-y-4">
                        <p>
                            We partner with Get Drivers Ed to offer Texas-approved online courses for teens and adults. Complete your lessons from home at your own pace, with clear guidance and a smooth, stress-free experience.
                        </p>
                        <p>
                            When you're ready for behind-the-wheel practice, Gifted Wheels is here with calm, confidence-building instruction.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {data.map((box, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-amber-200/20 border border-amber-100 flex flex-col group transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
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
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-transparent hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all group/link font-bold text-slate-900"
                                    >
                                        <span className="text-sm">{link.label}</span>
                                        <ExternalLink className="w-4 h-4 text-amber-500 group-hover/link:text-amber-700 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Support Section Footer */}
                <div className="mt-20 text-center p-12 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-amber-500/10" />

                    <div className="relative z-10">
                        <h4 className="text-2xl font-black mb-4">
                            Questions? We're Here to Help. Carrollton, Lewisville, Colony, Plano, Frisco
                        </h4>

                        <p className="text-slate-300 mb-8 font-medium italic">
                            Please reach out if you have any questions. Carrollton, Lewisville, Colony, Plano, Frisco
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-10">
                            <div className="flex items-center justify-center gap-3">
                                <Mail className="text-amber-400 w-5 h-5" />
                                <span className="font-bold">info@giftedwheelsds.com</span>
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