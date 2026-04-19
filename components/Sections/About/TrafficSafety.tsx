"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { TrafficCone, Signpost, ShieldAlert, Zap } from "lucide-react";

const TrafficSafety = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const safetyFeatures = [
    {
      title: "Traffic Signals",
      desc: "Understanding traffic lights is key. Stop on red, prepare on yellow, and go only when clear on green. We teach strict adherence to prevent accidents.",
      icon: <TrafficCone className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50",
      hoverBorder: "hover:border-red-200",
    },
    {
      title: "Road Signs",
      desc: "From stop signs to speed limits and pedestrian crossings. We help learners recognize and respond to each sign with confidence and precision.",
      icon: <Signpost className="w-8 h-8 text-yellow-500" />,
      bgColor: "bg-yellow-50",
      hoverBorder: "hover:border-yellow-200", // blue → yellow
    },
    {
      title: "Safety First",
      desc: "Buckle up, maintain distance, and stay alert. Our instructors turn safe driving into a habit, ensuring you stay protected on every journey.",
      icon: <ShieldAlert className="w-8 h-8 text-emerald-500" />,
      bgColor: "bg-emerald-50",
      hoverBorder: "hover:border-emerald-200",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-50/50 blur-[100px] -z-10 rounded-full" />{" "}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50 blur-[100px] -z-10 rounded-full" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6"
          >
            <Zap className="w-4 h-4 text-yellow-500" /> {/* blue → yellow */}
            <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              confidence starts here
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Driving Knowledge &{" "}
            <span className="text-yellow-500">Road Safety</span>{" "}
            {/* blue → yellow */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg font-medium leading-relaxed"
          >
            At Gifted Wheels, we don’t just teach driving — we teach confidence,
            awareness, and responsibility.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 ${feature.hoverBorder} transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]`}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 font-medium leading-relaxed">
                {feature.desc}
              </p>

              {/* line color blue → yellow */}
              <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-yellow-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrafficSafety;
