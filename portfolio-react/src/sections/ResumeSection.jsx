import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";


export default function ResumeSection() {
const [open, setOpen] = useState(false);


return (
<section id="resume" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-28">
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-2xl font-bold text-gray-900 mb-8"
>
Resume
</motion.h2>


<button
onClick={() => setOpen(true)}
className="px-6 py-3 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
>
View / Download Resume
</button>


<AnimatePresence>
{open && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
>
<motion.div
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
exit={{ scale: 0.9, opacity: 0 }}
transition={{ duration: 0.2 }}
className="bg-white w-[90%] h-[85%] rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3"
>
{/* Sidebar */}
<div className="p-6 border-r bg-gray-50 flex flex-col justify-between">
<div>
<h3 className="font-semibold text-gray-800 text-lg mb-2">Akash Gupta</h3>
<p className="text-sm text-gray-600 mb-6">Engineering Manager — QA</p>
<a
href="/Akash_Gupta_EM_QA_Resume.pdf"
download
className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
>
<Download size={16} /> Download PDF
</a>
</div>
<button
onClick={() => setOpen(false)}
className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm"
>
<X size={16} /> Close
</button>
</div>


{/* PDF Viewer */}
<div className="col-span-2 bg-gray-100 h-full">
<iframe
src="/Akash_Gupta_EM_QA_Resume.pdf"
title="Resume"
className="w-full h-full border-0"
></iframe>
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
</section>
);
}