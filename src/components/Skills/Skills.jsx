// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
<section
  id="skills"
  className="pt-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[15vw] font-mono bg-[#050414] text-white"
>
  {/* Title */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white">SKILLS</h2>
    <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
    <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
    </p>
  </div>

  {/* Code Window Style Skill Display - 2 by 2 layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {SkillsInfo.map((category, index) => (
      <div
        key={index}
        className="bg-[#0f0f23] border border-white/10 rounded-xl shadow-xl p-5 md:p-6 text-sm sm:text-base w-full relative"
      >
        {/* Apple-style Dots */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <pre className="whitespace-pre-wrap text-gray-300 text-left overflow-x-auto">
<span className="text-pink-400">const</span> <span className="text-white">{category.title.toLowerCase()}</span> = [
  {category.skills.map((skill, i) => (
    <span key={i} className="inline-flex items-center gap-2 mr-3 my-1">
      <img src={skill.logo} alt={skill.name} className="w-5 h-5 inline-block" />
      <span className="text-yellow-400">"{skill.name}"</span>{i < category.skills.length - 1 ? ',' : ''}
    </span>
  ))}
];
        </pre>
      </div>
    ))}
  </div>
</section>
);

export default Skills;
