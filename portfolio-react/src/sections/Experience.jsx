import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Engineering Manager - Quality Assurance",
    company: "GreyOrange",
    period: "Apr 2024 - Present",
    location: "Gurgaon (Remote)",
    highlights: [
      "Built and scaled automation frameworks cutting regression cycles by ~60%",
      "Leading a team of 5 QA engineers with focus on technical depth & ownership",
      "Defined release quality gates and acted as P&E escalation point"
    ]
  },
  {
    role: "Senior QA Engineer II",
    company: "GreyOrange",
    period: "Jul 2022 - Mar 2024",
    location: "Gurgaon (Remote)",
    highlights: [
      "Designed Appium + TestNG automation framework architecture",
      "Integrated BrowserStack & CI workflows for mobile automation",
      "Introduced GitHub Actions-based regression pipelines"
    ]
  },
  {
    role: "Sub System Architect / Senior Software Engineer",
    company: "Ericsson & Amazon",
    period: "2014 - 2022",
    location: "Gurgaon / Bengaluru",
    highlights: [
      "Contributed to SDP platform reliability with TTCN-based validation",
      "Developed internal tooling for network dimensioning & automation",
      "Exposure to large-scale distributed telecom workloads"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-900 mb-10"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-gray-300 ml-4">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 ml-4"
          >
            <div className="absolute -left-2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white"></div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900">{item.role}</h3>
              <p className="text-sm text-gray-600">{item.company} • {item.location}</p>
              <p className="text-xs text-gray-500 mt-1">{item.period}</p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}