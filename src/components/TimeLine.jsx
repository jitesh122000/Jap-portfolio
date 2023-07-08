import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

// import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeLine() {
  // let workIconStyles = { background: "#06D6A0",  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" };
  // let schoolIconStyles = { background: "#f9c74f",  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" };

  return (
    <div className="w-full bg-black p-4">
      <h1 className="title text-5xl flex justify-center text-white font-bold items-center mb-14">Eduction</h1>
      {/* <VerticalTimeline  >
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date text-cyan-300"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              className="shadow-red-700"
              
            >
              <h3 className="vertical-timeline-element-title pt-3">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button no-underline rounded text-white bg-slate-700 p-1 my-2 ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline> */}

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title py-2 font-bold">WordPress Developer</h3>
    <div className="flex text-gray-100 items-center justify-start gap-1">
        <h4 className="bg-gray-700 rounded-lg px-2">WordPress</h4>
        <h4 className="bg-gray-700 rounded-lg px-2">SEO</h4>
        <h4 className="bg-gray-700 rounded-lg px-2">Content Developer</h4>
    </div>
    <p>
      Creative Direction, On-page SEO activities, Digital images creation using Canva & Adobe, Video creations using Canva and Youtube activities, Blog postings by developing the content.
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="July 2019 - June 2023"
    contentStyle={{ background: 'rgb(245, 176, 65)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(245, 176, 65)' }}
    iconStyle={{ background: 'rgb(245, 176, 65)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Bachelor of Technology/ Computer Science Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle ">MLR Institute of Technology and Management</h4>
    <h6 className="text-sm mt-4 font-bold">
    CGPA-8.05
    </h6>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education "
    date="August 2017 - March 2019"
    dateClassName=" text-white"
    contentStyle={{ background: 'rgb(236, 240, 241)', color: 'black',  }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(236, 240, 241)' }}
    iconStyle={{ background: 'rgb(236, 240, 241)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Intermediate (MPC)/ Board of Intermediate Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Sri Chaitanya Junior college, Kukatpally.</h4>
    <h6 className="text-sm mt-4 font-bold">
    Score-90.8%
    </h6>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016 - 2017"
    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
    iconStyle={{ background:'rgb(16, 204, 82)'  , color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Class X/ SSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Krishnaveni Talent School, Mancherial.</h4>
    <h6 className="text-sm mt-4 font-bold">
    CGPA-9.0
    </h6>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  />
</VerticalTimeline>



    </div>
  );
}

export default TimeLine