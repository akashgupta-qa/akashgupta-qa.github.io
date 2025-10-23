import React from "react";
import { motion } from "framer-motion";


const projects = [
{
title: "Inventory-Controlled Automation Suite",
subtitle: "End-to-end inventory validation framework",
description:
"Architected an automation suite to validate critical inventory flows. Reduced manual regression efforts and enabled faster build confidence across large-scale releases.",
impact: ["60% reduction in regression time", "Improved reliability of critical flows", "Reusable modular test components"],
},
{
title: "Mobile Automation + CI Integration",
subtitle: "Cross-device execution strategy",
description:
"Integrated Appium framework with BrowserStack & CI, enabling execution across devices and environments. Focused on stability and flaky test reduction.",
impact: ["Automated mobile regression cycles", "Scalable test coverage", "Reduced manual device-level checks"],
},
{
title: "GitHub Actions for Regression",
subtitle: "Pipeline for nightly runs & reporting",
description:
"Developed CI-based regression pipelines with real-time test visibility. Ensured transparency in build health and early feedback loops.",
impact: ["Improved developer feedback", "Automated reporting", "Shift-left testing culture"],
},
];


export default function Projects() {
return (
<section id="projects" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-28">
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-2xl font-bold text-gray-900 mb-10"
>
Projects & Case Studies
</motion.h2>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((p, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: index * 0.1 }}
className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
>
<h3 className="font-semibold text-gray-900 text-lg">{p.title}</h3>
<p className="text-sm text-indigo-600 mt-1">{p.subtitle}</p>
<p className="text-sm text-gray-700 mt-3 leading-relaxed">{p.description}</p>
<ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc list-inside">
{p.impact.map((i, j) => (
<li key={j}>{i}</li>
))}
</ul>
</motion.div>
))}
</div>
</section>
);
}