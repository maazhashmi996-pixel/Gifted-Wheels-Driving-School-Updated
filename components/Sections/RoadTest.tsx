"use client";
import React from "react";
import { motion } from "framer-motion";
import { Car, Road, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const roadTestData = [
  {
    title: "Driving Test Practice",
    desc: "Get real-world practice with certified instructors. Learn to stay calm, focused, and confident under test conditions.",
    icon: <Car className="w-8 h-8" />,
    color: "bg-yellow-50",
  },
  {
    title: "Driving Road Test",
    desc: "Perform your official test using our dual-brake vehicles with full support. Fee for teens and adults applies.",
    icon: <Road className="w-8 h-8" />,
    color: "bg-slate-100",
    isSpecial: true,
  },
  {
    title: "Safety & Confidence",
    desc: "We focus on building the skills needed to handle any road situation with complete peace of mind.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: "bg-yellow-100",
  },
  {
    title: "Insurance Covered",
    desc: "All our vehicles are fully insured for testing purposes — so you’re always secure while taking the test.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-slate-200",
  },
];

const RoadTest = () => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-700 font-black uppercase tracking-widest text-sm mb-4 block"
          >
            Ready for Road Test
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight"
          >
            The <span className="text-yellow-600">Road Test</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-700 font-bold leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            Learn rules, signs, signals and parallel parking becoming confident
            drivers ready for the road in our dual brake vehicles.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadTestData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-yellow-200 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-slate-700 mb-8 shadow-inner transition-transform duration-500`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
                {item.desc}
              </p>

              {item.isSpecial && (
                <Link
                  href="/contact"
                  className="text-yellow-600 font-bold text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
                >
                  Contact for Pricing
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadTest;
