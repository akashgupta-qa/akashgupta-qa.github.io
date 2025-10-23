import React from "react";
import { motion } from "framer-motion";


export default function About() {
return (
<section id="about" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-28">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, ease: "easeOut" }}
className="grid grid-cols-1 md:grid-cols-2 gap-10"
>
<div>
<h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
<p className="text-gray-700 leading-relaxed">
I am a Quality Engineering Manager with expertise in building automation frameworks
(UI + API), strengthening CI pipelines, and integrating quality as a design principle
rather than a final checkpoint. With experience across large-scale distributed systems,
I focus on accelerating release confidence and engineering velocity while reducing
regression overhead.
</p>
<p className="text-gray-700 mt-4 leading-relaxed">
I mentor teams, establish quality ownership models, and embed testability early in the
development lifecycle. My goal is to create scalable QA ecosystems that are measurable,
proactive, and engineering-first.
</p>
</div>


<div className="bg-white shadow rounded-xl p-6 border border-gray-100">
<h3 className="font-semibold text-gray-800 mb-3">Leadership Highlights</h3>
<ul className="space-y-3 text-gray-700 text-sm">
<li>• Built & scaled automation frameworks for UI + API validation.</li>
<li>• Reduced regression cycle time and improved build reliability.</li>
<li>• Mentored QA teams on tooling, architecture & quality mindset.</li>
<li>• Drove cross-functional alignment with Product & Engineering.</li>
<li>• Introduced CI-based reporting for transparency & feedback loops.</li>
</ul>
</div>
</motion.div>
</section>
);
}