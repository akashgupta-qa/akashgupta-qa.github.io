import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";


export default function Contact() {
return (
<section id="contact" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-28">
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-2xl font-bold text-gray-900 mb-10"
>
Contact
</motion.h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<p className="text-gray-700 leading-relaxed">
Whether it's collaboration, consulting, QA strategy, or engineering
leadership discussions — feel free to reach out. I'm always open to
meaningful conversations and impact-driven opportunities.
</p>


<div className="flex flex-col gap-3 text-sm text-gray-800">
<a href="mailto:aakashgupta1992@gmail.com" className="flex items-center gap-3 hover:text-indigo-600">
<Mail size={16} /> aakashgupta1992@gmail.com
</a>
<a href="tel:+918376934143" className="flex items-center gap-3 hover:text-indigo-600">
<Phone size={16} /> +91-8376934143
</a>
<a href="https://github.com/akashgupta-qa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600">
<Github size={16} /> github.com/akashgupta-qa
</a>
<a href="https://www.linkedin.com/in/akash-gupta-39812367/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600">
<Linkedin size={16} /> linkedin.com/in/akash-gupta-39812367/
</a>
</div>
</div>


<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<h3 className="font-semibold text-gray-900 mb-4">Quick Message</h3>
<form className="space-y-4">
<input
type="text"
placeholder="Your Name"
className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
/>
<input
type="email"
placeholder="Your Email"
className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
/>
<textarea
rows="4"
placeholder="Message"
className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
></textarea>
<button
type="button"
className="px-6 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
>
Send Message (Coming Soon)
</button>
</form>
</div>
</div>
</section>
);
}