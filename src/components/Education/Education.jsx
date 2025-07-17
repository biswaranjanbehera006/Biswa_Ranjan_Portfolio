import React from "react";
import { myeducation } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="myeducation"
      className="pt-5 pb-24 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white relative inline-block">
          EDUCATION
          <span className="block h-[3px] bg-purple-500 mt-2 mx-auto w-[85%] md:w-full rounded-full"></span>
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 mt-4 text-lg font-semibold text-center">
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </div>
      </div>

      {/* Apple-style Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {myeducation.map((edu) => (
          <div
            key={edu.id}
            className="bg-[#0d0c1d] border border-purple-700 rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            {/* Apple-style bar */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between space-x-2">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <p className="text-white text-sm font-semibold truncate">{edu.degree}</p>
              <div></div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-16 h-16 object-cover rounded-md border border-white/20"
                />
                <div>
                  <h3 className="text-white text-[16px] md:text-lg font-semibold">
                    {edu.school}
                  </h3>
                  <p className="text-gray-400 text-sm">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-purple-400 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
