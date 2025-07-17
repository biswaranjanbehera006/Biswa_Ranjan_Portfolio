import React from 'react';
import profileImageabout from '../../assets/profile_biswa.png';

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 pb-20 px-[7vw] lg:px-[10vw] font-sans text-white bg-[#050414] bg-gradient-to-br from-[#050414] via-[#0d0727] to-[#1a0a36] overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* Left: Developer Info */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 bg-[#0f0f23] border border-purple-700 rounded-xl shadow-xl text-sm font-mono p-5 md:p-8 transition-transform duration-500 hover:scale-105">
          
          {/* Window Dots */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Code Style Text */}
          <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
<span className="text-pink-400">const</span> <span className="text-white">developer</span> = <span className="text-purple-400">{`{`}</span>
  <span className="text-green-400">name</span>: <span className="text-yellow-400">"Biswa Ranjan Behera"</span>,
  <span className="text-green-400">role</span>: <span className="text-yellow-400">"Fullstack Developer"</span>,
  <span className="text-green-400">skills</span>: [<span className="text-yellow-400">"React", "Node.js", "Express", "MongoDB", "Tailwind", "JavaScript"</span>],
  <span className="text-green-400">quickLearner</span>: <span className="text-blue-400">true</span>,
  <span className="text-green-400">problemSolver</span>: <span className="text-blue-400">true</span>,
  <span className="text-green-400">teamPlayer</span>: <span className="text-blue-400">true</span>,
  <span className="text-green-400">experience</span>: <span className="text-yellow-400">"Internship-based MERN Projects"</span>,
  <span className="text-green-400">hireable</span>: <span className="text-pink-400">function()</span> <span className="text-white">{`{`}</span>
    <span className="text-pink-400">return</span> (
      this.quickLearner &amp;&amp;
      this.problemSolver &amp;&amp;
      this.skills.length {">="} 5
    )
  <span className="text-white">{`}`}</span>
<span className="text-purple-400">{`}`}</span>
          </pre>

          {/* Download CV */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1FdfM7LNw_r9zyiI1j30N62ja9tf-dDzS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold transition-transform hover:scale-105 shadow-[0_0_10px_rgba(130,69,236,0.4)]"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl hover:scale-105 transition-transform duration-500">
            <img
              src={profileImageabout}
              alt="Biswa Ranjan Behera"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Blur Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
