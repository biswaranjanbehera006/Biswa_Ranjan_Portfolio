import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
 <section
      id="experience"  
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
  {/* Section Title */}
 <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
  <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
  <p className="text-gray-400 mt-4 text-lg font-semibold">
    My internship experience as a MERN Stack Developer at Qlith Innovation Pvt. Ltd.
  </p>
</div>

  {/* Experience Code Block */}
  <div className="flex justify-center items-center">
    <div className="relative bg-[#0d0c1d] text-white font-mono text-sm md:text-base rounded-xl p-6 sm:p-8 shadow-xl w-full max-w-4xl border border-purple-700 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Fake window buttons */}
      <div className="flex space-x-2 absolute top-4 left-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Code Content */}
      <pre className="mt-8 whitespace-pre-wrap leading-relaxed">
        <code>
          <span className="text-pink-400">const</span>{" "}
          <span className="text-white">internshipExperience</span> = {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">name</span>:{" "}
          <span className="text-yellow-300">"Biswa Ranjan Behera"</span>,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">role</span>:{" "}
          <span className="text-yellow-300">"MERN Stack Intern"</span>,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">company</span>:{" "}
          <span className="text-yellow-300">"Qlith Innovation Pvt. Ltd."</span>,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">location</span>:{" "}
          <span className="text-yellow-300">"Bhubaneswar"</span>,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">duration</span>:{" "}
          <span className="text-yellow-300">"2 Months"</span>,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">technologies</span>: [<br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-300">"MongoDB"</span>,{" "}
          <span className="text-yellow-300">"Express"</span>,{" "}
          <span className="text-yellow-300">"React"</span>,{" "}
          <span className="text-yellow-300">"Node.js"</span>,{" "}
          <span className="text-yellow-300">"TailwindCSS"</span><br />
          &nbsp;&nbsp;],{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">certified</span>:{" "}
          <span className="text-blue-400">true</span>{"\n"}
          {"}"}
        </code>
      </pre>

      {/* Download Button */}
      <div className="mt-6 text-center">
        <a
              href="https://drive.google.com/file/d/1gYB8jiWoaxA44ZBSl6kHC5Pbuc-CyjoH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold transition-transform hover:scale-105 shadow-[0_0_10px_rgba(130,69,236,0.4)]"
            >
               Download Internship Certificate
            </a>
         
      </div>
    </div>
  </div>
</section>



  );
};

export default Experience;
