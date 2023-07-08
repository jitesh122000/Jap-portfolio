// import React from 'react'
// import { ReactComponent as Engineer} from "./Cse-engineer.svg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// function About() {
//   return (
//     <div
//     name="about"
//     className="pt-10 h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200"
//   >
//     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//       <div className="pb-8">
//         <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//           About
//         </p>
//       </div>

//       <p className="text-xl mt-10">
//      I am a passionate web developer and recent graduate from the B.Tech program in Computer Science and Engineering. With a strong foundation in computer science subjects and a keen interest in web development, I am driven to create innovative and user-friendly web experiences.
//       </p>

//       <br />

//       <p className="text-xl">
//       In addition to my proficiency in web development technologies like HTML, CSS, and JavaScript, I have also acquired comprehensive knowledge of Data Structures and Algorithms (DSA). I am well-versed in implementing efficient algorithms and solving complex problems using DSA concepts.
//      </p>
//       <br />
//       <p className="text-xl">
//       I have hands-on experience with DSA implementations in languages like Java and Python. This knowledge allows me to optimize the performance and scalability of web applications, ensuring smooth user experiences even with large data sets.
//       </p>
//       <br />
//       <p className="text-xl">
//       I am excited about the opportunity to work on interesting projects and collaborate with like-minded professionals. If you have a project in mind or would like to discuss potential opportunities, feel free to reach out to me. Let's create something amazing together!
//       </p>
//       <button
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-3 py-2 my-2 flex items-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Contact me 
//               <span className="group-hover:rotate-90 duration-500">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </button>
//           <Engineer />
//     </div>
   
//   </div>
//   )
// }

// export default About

import React from 'react';
import { ReactComponent as Engineer } from "./Cse-engineer.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ScrollAnimation from './ScrollAnimation';

function About() {
  return (
    <div
      name="about"
      className="pt-10 bg-gradient-to-b from-gray-800 to-black text-gray-200"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <ScrollAnimation direction='left'>
        <div className="flex flex-wrap items-center">
          
          
          <div className="w-full md:w-1/2 lg:w-2/3 px-4" >
            <p className="text-lg mt-10">
              I am a passionate web developer and recent graduate from the B.Tech program in Computer Science and Engineering. With a strong foundation in computer science subjects and a keen interest in web development, I am driven to create innovative and user-friendly web experiences.
            </p>

            <br />

            <p className="text-lg">
              In addition to my proficiency in web development technologies like HTML, CSS, and JavaScript, I have also acquired comprehensive knowledge of Data Structures and Algorithms (DSA). I am well-versed in implementing efficient algorithms and solving complex problems using DSA concepts.
            </p>
            <br />
            <p className="text-lg">
              I have hands-on experience with DSA implementations in languages like Java and Python. This knowledge allows me to optimize the performance and scalability of web applications, ensuring smooth user experiences even with large data sets.
            </p>
            <br />
            <p className="text-lg">
              I am excited about the opportunity to work on interesting projects and collaborate with like-minded professionals. If you have a project in mind or would like to discuss potential opportunities, feel free to reach out to me. Let's create something amazing together!
            </p>
            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-3 py-2 my-2 flex items-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
               <Link to="Contact" smooth duration={500}>
              Contact me
            </Link>
              
            
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
          
         
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-6 md:mt-0">
            <Engineer className="mx-auto" />
          </div>
          
        </div>
        </ScrollAnimation>
       
      </div>
    </div>
  );
}

export default About;
