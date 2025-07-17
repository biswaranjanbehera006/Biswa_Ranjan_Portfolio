import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9bo1u4p",
        "template_kr4fwa2",
        form.current,
        "NsPfZpETlmSsMNI4R"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
  <section
  id="contact"
  className="flex flex-col items-center justify-center py-20 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-[#0a0918]"
>
  <ToastContainer />

  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white inline-block border-b-4 border-purple-500 pb-2">
      CONTACT
    </h2>
    <p className="text-gray-400 mt-6 text-lg font-semibold max-w-5xl mx-auto leading-relaxed text-center">
      I’m always open to exciting collaborations, innovative projects, or
      technical discussions—feel free to connect for any opportunities or
      inquiries.
    </p>
  </div>

  {/* Contact Boxes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">

    {/* Left Box */}
   <div className="bg-[#0d0c1d] border border-purple-700 rounded-xl shadow-xl p-5 flex flex-col hover:scale-105 transition-transform duration-500 min-h-[260px]">
  <div className="flex space-x-2 mb-4">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>
  </div>

  <pre className="whitespace-pre-wrap text-gray-300 font-mono text-base leading-normal flex-1 mt-10">
<span className="text-pink-400">const</span> <span className="text-white">developer</span> = <span className="text-purple-400">{`{`}</span>
{`\n  `}
<span className="text-green-400">👤 name</span>: <span className="text-yellow-300">"Biswa Ranjan Behera"</span>,
{`\n  `}
<span className="text-green-400">💼 role</span>: <span className="text-yellow-300">"MERN Stack Developer"</span>,
{`\n  `}
<span className="text-green-400">📧 email</span>: <span className="text-yellow-300">"biswaranjanbehera006@gmail.com"</span>,
{`\n  `}
<span className="text-green-400">📱 mobile</span>: <span className="text-yellow-300">"9337747632"</span>,
{`\n  `}
<span className="text-green-400">✅ availableForWork</span>: <span className="text-blue-400">true</span>,
{`\n  `}
<span className="text-green-400">🧠 selfMotivated</span>: <span className="text-blue-400">true</span>,
{`\n  `}
<span className="text-green-400">💪 hardWorking</span>: <span className="text-blue-400">true</span>,
{`\n  `}
<span className="text-green-400">⚡ quickLearner</span>: <span className="text-blue-400">true</span>
{`\n`}
<span className="text-purple-400">{`}`}</span>
  </pre>

  <div className="flex gap-6 mt-5 justify-center">
    <a
      href="https://github.com/biswaranjanbehera006"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-3xl hover:text-purple-500 transition"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/biswa-ranjan-behera/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-3xl hover:text-purple-500 transition"
    >
      <FaLinkedin />
    </a>
  </div>
</div>


    {/* Right Box */}
    <div className="bg-[#0d0c1d] border border-purple-700 rounded-xl shadow-xl p-5 hover:scale-105 transition-transform duration-500 min-h-[260px] flex flex-col justify-between">
      <div className="flex space-x-2 mb-4 ">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      <h3 className="text-xl font-semibold text-white text-center mb-4">
        Connect With Me 🚀
      </h3>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        ></textarea>

        <button
          type="submit"
          className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold transition-transform hover:scale-105 shadow-[0_0_10px_rgba(130,69,236,0.4)]"
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  </div>
</section>




  );
};

export default Contact;
