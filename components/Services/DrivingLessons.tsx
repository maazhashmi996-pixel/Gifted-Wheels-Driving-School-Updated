"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Car,
  MapPin,
  CheckCircle2,
  Navigation,
  GraduationCap,
} from "lucide-react";

const DrivingLessons = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="\dd.png"
                alt="Driving Lessons"
                className="w-full h-[600px] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      Dual-Brake Safety
                    </h4>
                    <p className="text-slate-600 text-sm font-medium">
                      Extra confidence in every lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-slate-700 mb-6 font-bold text-xs uppercase tracking-widest border border-yellow-100">
                <GraduationCap className="w-4 h-4 text-yellow-600" />
                Expert Instruction
              </div>

              <h2 className="text-5xl font-black text-slate-900 leading-tight mb-6">
                Driving Lessons <br />
                <span className="text-yellow-600">Adult & Teen</span>
              </h2>

              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-6">
                Enhance your driving skills with comprehensive classes tailored
                for all skill levels. Whether you're a beginner or building
                confidence, our instructors ensure a premium learning
                experience.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-4"
            >
              {[
                "Preparation for Road Test & Parallel Parking",
                "Specialized Adult & Teen Curriculum",
                "High-Level Skill Building for License Holders",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-bold">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Pick-up & Drop-off Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-xl relative overflow-hidden group"
            >
              <Navigation className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold italic underline decoration-yellow-400 underline-offset-4">
                    Complimentary Pick-up & Drop-off
                  </h3>
                </div>

                <div className="space-y-3 text-slate-200 font-medium">
                  <p className="leading-relaxed">
                    Free service within Carrollton, Plano, Frisco, The Colony
                    for both 1-hour and 2-hour classes.
                  </p>
                  <p className="text-sm bg-white/10 p-3 rounded-xl border border-white/10">
                    For other areas please contact us.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingLessons;
