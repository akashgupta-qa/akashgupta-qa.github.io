import React from "react";
import { motion } from "framer-motion";


const technical = [
"Java", "Python (basic)", "TTCN", "Selenium", "Appium", "TestNG", "Maven",
"REST Assured", "BrowserStack", "JMeter", "MongoDB", "MySQL", "Git",
"GitHub Actions", "Jenkins"
];


const leadership = [
"QA Strategy & Roadmapping", "Mentoring & Team Growth", "Shift-Left Testing",
"Cross-functional Collaboration", "Release Quality Ownership", "Stakeholder Alignment",
"Process Automation", "Engineering-Led Quality"
];


export default function Skills() {
return (
<section id="skills" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-28 bg-gray-50">
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-2xl font-bold text-gray-900 mb-10"
>
Skills & Expertise
</motion.h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<motion.div
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
>
<h3 className="font-semibold text-gray-900 mb-4">Technical Skills</h3>
<div className="flex flex-wrap gap-2">
{technical.map((skill, index) => (
<span key={index} className="px-3 py-1 text-sm rounded-full border bg-gray-50 text-gray-700">
{skill}
</span>
))}
</div>
</motion.div>


<motion.div
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
>
<h3 className="font-semibold text-gray-900 mb-4">Leadership & Delivery</h3>
<div className="flex flex-wrap gap-2">
{leadership.map((skill, index) => (
<span key={index} className="px-3 py-1 text-sm rounded-full border bg-gray-50 text-gray-700">
{skill}
</span>
))}
</div>
</motion.div>
</div>
</section>
);
}