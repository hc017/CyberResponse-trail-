// import React, { useState, useEffect } from "react";
// import "../JoinUs/JoinUs.css";
// import { useInView } from "react-intersection-observer";
// import "./How_to.css";
// import report from "./Report_home.png";
// import choice from "./choice.png";
// const How_to = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 50% of the element is visible
//   });

//   // Set isVisible to true when the component enters the viewport
//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [inView]);

//   return (
//     <div>
//       <div class="patterns">
//         <svg width="100%" height="100%">
//           <text x="10%" y="80%">
//             How to Report?
//           </text>
//         </svg>
//       </div>

//       <div className="JoinUsContainer">
//         <div className="CombineText">
//           <div className="TextContentJoin" ref={ref}>
//             <div className={`JoinUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">
//                 1. Start by clicking "Report Incident"
//               </h1>
//               <div className="ButtonJoinCSS"></div>
//             </div>
//           </div>
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={report} alt="Join" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="JoinUsContainer">
//         <div className="CombineText">
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={choice} alt="About" />
//             </div>
//           </div>
//           <div className="AboutTextContentJoin" ref={ref}>
//             <div className={`AboutUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">2. Choose the right options</h1>
//               <br />
//               <br />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="JoinUsContainer">
//         <div className="CombineText">
//           <div className="TextContentJoin" ref={ref}>
//             <div className={`JoinUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">
//                 3. Fill in the correct information.
//               </h1>
//               <div className="ButtonJoinCSS"></div>
//             </div>
//           </div>
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={report} alt="Join" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="JoinUsContainer">
//         <div className="CombineText">
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={choice} alt="About" />
//             </div>
//           </div>
//           <div className="AboutTextContentJoin" ref={ref}>
//             <div className={`AboutUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">
//                 4. Share details about the suspect (if you have any)
//               </h1>
//               <br />
//               <br />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="JoinUsContainer">
//         <div className="CombineText">
//           <div className="TextContentJoin" ref={ref}>
//             <div className={`JoinUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">
//                 3. Fill in the correct information.
//               </h1>
//               <div className="ButtonJoinCSS"></div>
//             </div>
//           </div>
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={report} alt="Join" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default How_to;

// import React, { useState, useEffect } from "react";
// import "../JoinUs/JoinUs.css";
// import { useInView } from "react-intersection-observer";
// import AboutP from "../About/about.jpg";
// import Join from "../JoinUs/joinus.jpg";

// const How_to = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 50% of the element is visible
//   });

//   // Set isVisible to true when the component enters the viewport
//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [inView]);

//   return (
//     <div>
//       <div class="patterns">
//         <svg width="100%" height="100%">
//           <text x="10%" y="80%">
//             How to Report?
//           </text>
//         </svg>
//       </div>

//       <div className="JoinUsContainer">
//         <div className="CombineText">
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={AboutP} alt="About" />
//             </div>
//           </div>
//           <div className="AboutTextContentJoin" ref={ref}>
//             <div className={`AboutUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">About CyberSoochna</h1>

//               <p className="ParaDecoration">
//                 Cybersoochna is your automated incident response partner,
//                 revolutionizing cybersecurity with intelligent incident
//                 categorization and seamless collaboration. Empowering teams to
//                 swiftly prioritize and mitigate threats, Cybersoochna
//                 streamlines incident workflows, enhances situational awareness,
//                 and fortifies organizational resilience in the face of evolving
//                 cyber challenges. Experience efficient incident response like
//                 never before with Cybersoochna
//               </p>
//               <br />
//               <br />
//             </div>
//           </div>
//         </div>

//         <div className="JoinUsContainer">
//           <div className="CombineText">
//             <div className="TextContentJoin" ref={ref}>
//               <div className={`JoinUsText ${isVisible ? "isVisible" : ""}`}>
//                 <h1 className="TextDecoration">
//                   Join forces with us in the fight against crime! <br />
//                   Become a developer in our community.
//                 </h1>
//                 <div className="ButtonJoinCSS"></div>
//               </div>
//             </div>
//             <div className="TextContentTwoJoin">
//               <div className="ImgJoin">
//                 <img src={Join} alt="Join" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="CombineText">
//           <div className="TextContentTwoJoin">
//             <div className="ImgJoin">
//               <img src={AboutP} alt="About" />
//             </div>
//           </div>
//           <div className="AboutTextContentJoin" ref={ref}>
//             <div className={`AboutUsText ${isVisible ? "isVisible" : ""}`}>
//               <h1 className="TextDecoration">About CyberSoochna</h1>

//               <p className="ParaDecoration">
//                 Cybersoochna is your automated incident response partner,
//                 revolutionizing cybersecurity with intelligent incident
//                 categorization and seamless collaboration. Empowering teams to
//                 swiftly prioritize and mitigate threats, Cybersoochna
//                 streamlines incident workflows, enhances situational awareness,
//                 and fortifies organizational resilience in the face of evolving
//                 cyber challenges. Experience efficient incident response like
//                 never before with Cybersoochna
//               </p>
//               <br />
//               <br />
//             </div>
//           </div>
//         </div>

//         <div className="JoinUsContainer">
//           <div className="CombineText">
//             <div className="TextContentJoin" ref={ref}>
//               <div className={`JoinUsText ${isVisible ? "isVisible" : ""}`}>
//                 <h1 className="TextDecoration">
//                   Join forces with us in the fight against crime! <br />
//                   Become a developer in our community.
//                 </h1>
//                 <div className="ButtonJoinCSS"></div>
//               </div>
//             </div>
//             <div className="TextContentTwoJoin">
//               <div className="ImgJoin">
//                 <img src={Join} alt="Join" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default How_to;

// import React, { useState, useEffect } from "react";
// import "../JoinUs/JoinUs.css";
// import { useInView } from "react-intersection-observer";
// import AboutP from "../About/about.jpg";
// import Join from "../JoinUs/joinus.jpg";

// const How_to = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isContentLoaded, setIsContentLoaded] = useState(false); // New state variable

//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 50% of the element is visible
//   });

//   // Set isVisible to true when the component enters the viewport
//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [inView]);

//   // Set isContentLoaded to true once the component is mounted
//   useEffect(() => {
//     setIsContentLoaded(true);
//   }, []);

//   return (
//     <div className="JoinUsContainer">
//       <div className="CombineText">
//         <div className="TextContentTwoJoin">
//           <div className="ImgJoin">
//             <img src={AboutP} alt="About" />
//           </div>
//         </div>
//         <div className="AboutTextContentJoin" ref={ref}>
//           <div
//             className={`AboutUsText ${
//               isVisible && isContentLoaded ? "isVisible" : ""
//             }`}
//           >
//             <h1 className="TextDecoration">About CyberSoochna</h1>

//             <p className="ParaDecoration">
//               Cybersoochna is your automated incident response partner,
//               revolutionizing cybersecurity with intelligent incident
//               categorization and seamless collaboration. Empowering teams to
//               swiftly prioritize and mitigate threats, Cybersoochna streamlines
//               incident workflows, enhances situational awareness, and fortifies
//               organizational resilience in the face of evolving cyber
//               challenges. Experience efficient incident response like never
//               before with Cybersoochna
//             </p>
//             <br />
//             <br />
//           </div>
//         </div>
//       </div>

//       <div className="CombineText">
//         <div className="TextContentJoin" ref={ref}>
//           <div className={`JoinUsText ${isVisible && isContentLoaded ? "isVisible" : ""}`}>
//             <h1 className="TextDecoration">
//               Join forces with us in the fight against crime! <br />
//               Become a developer in our community.
//             </h1>
//             <div className="ButtonJoinCSS"></div>
//           </div>
//         </div>
//         <div className="TextContentTwoJoin">
//           <div className="ImgJoin">
//             <img src={Join} alt="Join" />
//           </div>
//         </div>
//       </div>

//       <div className="CombineText">
//         <div className="TextContentTwoJoin">
//           <div className="ImgJoin">
//             <img src={AboutP} alt="About" />
//           </div>
//         </div>
//         <div className="AboutTextContentJoin" ref={ref}>
//           <div
//             className={`AboutUsText ${
//               isVisible && isContentLoaded ? "isVisible" : ""
//             }`}
//           >
//             <h1 className="TextDecoration">About CyberSoochna</h1>

//             <p className="ParaDecoration">
//               Cybersoochna is your automated incident response partner,
//               revolutionizing cybersecurity with intelligent incident
//               categorization and seamless collaboration. Empowering teams to
//               swiftly prioritize and mitigate threats, Cybersoochna streamlines
//               incident workflows, enhances situational awareness, and fortifies
//               organizational resilience in the face of evolving cyber
//               challenges. Experience efficient incident response like never
//               before with Cybersoochna
//             </p>
//             <br />
//             <br />
//           </div>
//         </div>
//       </div>

//       <div className="CombineText">
//         <div className="TextContentJoin" ref={ref}>
//           <div className={`JoinUsText ${isVisible && isContentLoaded ? "isVisible" : ""}`}>
//             <h1 className="TextDecoration">
//               Join forces with us in the fight against crime! <br />
//               Become a developer in our community.
//             </h1>
//             <div className="ButtonJoinCSS"></div>
//           </div>
//         </div>
//         <div className="TextContentTwoJoin">
//           <div className="ImgJoin">
//             <img src={Join} alt="Join" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default How_to;
