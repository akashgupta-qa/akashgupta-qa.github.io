import React from "react";


export default function Navbar({ visible }) {
return (
<nav
className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white border-b border-gray-200 ${
visible ? "translate-y-0" : "-translate-y-full"
}`}
>
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="font-bold text-gray-800 tracking-wide">Akash Gupta</div>
<div className="space-x-6 text-sm text-gray-700">
<a href="#about" className="hover:text-indigo-600">About</a>
<a href="#experience" className="hover:text-indigo-600">Experience</a>
<a href="#projects" className="hover:text-indigo-600">Projects</a>
<a href="#skills" className="hover:text-indigo-600">Skills</a>
<a href="#resume" className="hover:text-indigo-600">Resume</a>
<a href="#contact" className="hover:text-indigo-600">Contact</a>
</div>
</div>
</nav>
);
}