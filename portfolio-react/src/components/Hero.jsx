import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";


export default function Hero() {
return (
<section id="hero" className="pt-24 pb-16 max-w-6xl mx-auto px-6 scroll-mt-28">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
>
<div>
<h1 className="text-4xl font-bold text-gray-900 leading-tight">Akash Gupta</h1>
<p className="text-indigo-600 font-medium mt-2">Engineering Manager — Quality Assurance</p>
<p className="text-gray-700 mt-4 leading-relaxed">
Results-driven QA leader specializing in automation, API quality, and
system validation across microservices architectures. I build
scalable frameworks, improve release confidence, and mentor teams to
deliver engineering-led quality.
</p>


<div className="flex flex-wrap gap-4 mt-6">
<a href="mailto:aakashgupta1992@gmail.com" className="flex items-center gap-2 text-sm border px-4 py-2 rounded-md">
<Mail size={16} /> aakashgupta1992@gmail.com
</a>
<a href="tel:+918376934143" className="flex items-center gap-2 text-sm border px-4 py-2 rounded-md">
<Phone size={16} /> +91-8376934143
</a>
</div>


<div className="flex gap-4 mt-4 text-sm">
<a href="https://github.com/akashgupta-qa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border px-3 py-2 rounded-md">
<Github size={16} /> GitHub
</a>
<a href="https://www.linkedin.com/in/akash-gupta-39812367/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border px-3 py-2 rounded-md">
<Linkedin size={16} /> LinkedIn
</a>
</div>
</div>


<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
className="flex justify-center"
>
<img src="/avatar.png" alt="Avatar" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg" />
</motion.div>
</motion.div>
</section>
);
}