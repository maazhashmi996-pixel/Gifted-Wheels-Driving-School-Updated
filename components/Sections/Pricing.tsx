"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Clock, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Simple & <span className="text-yellow-500">Transparent</span>{" "}
            Pricing
          </motion.h2>

          <p className="text-slate-500 font-medium tracking-wide">
            Expert training at the best rates. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 1 Hour Lesson */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-500">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-4xl font-black text-slate-900">$55</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              1 Hour Lesson
            </h3>

            <ul className="space-y-4 mb-10">
              {[
                "Focused Skill Training",
                "Dual Brake Safety",
                "Professional Guidance",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-600 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 2 Hour Lesson */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-[#0f172a] p-10 rounded-[3rem] shadow-[0_40px_80px_rgba(15,23,42,0.25)] relative overflow-hidden group border border-slate-800"
          >
            <div className="absolute top-6 right-8 bg-yellow-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-yellow-500/20">
              Best Value
            </div>

            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="text-4xl font-black text-yellow">$100</span>
                <p className="text-yellow-400 text-xs font-bold mt-1">
                  SAVE $10
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">
              2 Hour Lesson
            </h3>

            <ul className="space-y-4 mb-10">
              {[
                "Intensive Practice Session",
                "Deep Road Confidence",
                "Extended Distance Options",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-yellow-500 text-white rounded-[2rem] font-black text-lg shadow-[0_20px_40px_rgba(234,179,8,0.3)] hover:shadow-[0_25px_50px_rgba(234,179,8,0.5)] hover:-translate-y-2 active:scale-95 transition-all duration-300 group"
          >
            Book Your Lesson Now
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-2xl"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
