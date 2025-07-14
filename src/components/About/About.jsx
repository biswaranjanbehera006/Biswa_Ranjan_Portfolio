import React from 'react';
import profileImageabout from '../../assets/profile_biswa.png';

const About = () => {
  return (
    <section
      id="about"
      className="pt-0 pb-20 px-[6vw] lg:px-[15vw] font-sans text-white bg-[#050414] bg-gradient-to-br from-[#050414] via-[#0d0727] to-[#1a0a36] overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Developer Info (Card-style) */}
        <div className="md:w-1/2 mt-10 bg-[#0f0f23] border border-white/10 rounded-xl shadow-xl text-sm text-left font-mono p-5 md:p-8 relative overflow-hidden">
          {/* Window dots */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Code-style text */}
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

          {/* Download CV Button */}
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

        {/* Right: Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-purple-600 shadow-xl hover:scale-105 transition-transform duration-500">
            <img
              src={profileImageabout}
              alt="Biswa Ranjan Behera"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
