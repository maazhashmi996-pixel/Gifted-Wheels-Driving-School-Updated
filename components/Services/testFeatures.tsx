"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Car,
  Compass,
  ParkingCircle,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const RoadTest = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const testFeatures = [
    {
      title: "Driving Test Practice",
      desc: "Get real-world practice with certified instructors. Learn to stay calm, focused, and confident under actual test conditions.",
      icon: <Compass className="w-8 h-8" />,
      color: "text-slate-700",
      bgColor: "bg-slate-100",
    },
    {
      title: "Official Road Test",
      desc: "Perform your official test using our dual-brake vehicles with full support. Fees for teens and adults are competitive.",
      icon: <Car className="w-8 h-8" />,
      color: "text-slate-700",
      bgColor: "bg-slate-100",
      badge: "Contact for Pricing",
    },
    {
      title: "Driving Skills",
      desc: "Learn rules, signs, signals and parallel parking, becoming confident drivers ready for the road in our dual brake vehicles.",
      icon: <ParkingCircle className="w-8 h-8" />,
      color: "text-slate-700",
      bgColor: "bg-slate-100",
    },
    {
      title: "Full Test Insurance",
      desc: "All our vehicles are fully insured for testing purposes. You are always covered and secure while taking your road test.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "text-slate-700",
      bgColor: "bg-slate-100",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-700 font-bold uppercase tracking-[0.2em] text-sm mb-4"
            >
              <ClipboardCheck className="w-5 h-5" />
              Certification Prep
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-slate-900 leading-tight"
            >
              Your Path to a <br />
              <span className="text-slate-700 italic">Drivers License</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 font-medium text-lg max-w-sm border-l-4 border-slate-200 pl-6"
          >
            We prepare you for the official road test during lessons, ensuring
            you master every step with confidence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testFeatures.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 md:p-12 rounded-[3rem] bg-white border border-slate-100 hover:border-slate-300 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform duration-500`}
                >
                  {item.icon}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    {item.badge && (
                      <span className="px-3 py-1 rounded-full bg-slate-700 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* arrow */}
              <div className="absolute bottom-8 right-8 text-slate-200 group-hover:text-slate-500 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadTest;
