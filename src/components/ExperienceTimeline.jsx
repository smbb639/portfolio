import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiAngular, SiDocker, SiPostman, SiMongodb, SiJira, SiGithub, SiElasticsearch, SiNodedotjs } from 'react-icons/si';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "SWE Intern",
      company: "CreditSea",
      location: "Raipur, Chhattisgarh",
      date: "Dec 2025 - Present",
      icon: <FaBriefcase />,
      color: "#10B981",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Postman", "AWS"],
      points: [
        "Built and scaled production features across Loan Origination (LOS), Loan Management (LMS) and HRMS systems, ensuring reliable and consistent application performance",
        "Designed and developed RESTful APIs to automate complete loan workflows, integrating third party services like Experian, Aadhaar, and payment gateways to streamline operations.",
        "Implemented a role based access control system to manage permissions across different user levels, along with audit logging to maintain transparency and security.",
        "Improved backend performance by optimizing MongoDB queries, aggregation pipelines and indexing strategies, resulting in faster and more efficient data handling.",
        "Worked closely within an agile team, contributing regularly to feature development, code reviews and collaborative problem solving.",
        "Developed and deployed responsive client facing portals using Next.js, focusing on intuitive, interactive and visually polished user experiences."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Team Tech Solutions",
      location: "Hyderabad, Telangana",
      date: "May 2025 - August 2025",
      icon: <FaBriefcase />,
      color: "#8B5CF6",
      tech: ["ReactJS", "Node.js", "MongoDB", "Docker", "Jira", "Google Cloud Platform", "Postman"],
      points: [
        "Developed secure login and signup functionality using Node.js and Express, implementing JWT based authentication and password hashing to ensure safe and reliable user access.",
        "Built core sections of the website including navigation, chatbot, gallery, and key frontend features, focusing on smooth performance and an engaging user experience."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Rookus",
      location: "Remote",
      date: "May 2024 - October 2024",
      icon: <FaBriefcase />,
      color: "#8B5CF6",
      tech: ["ReactJS", "Node.js", "MongoDB", "Postman"],
      points: [
        "Built and deployed the complete frontend of the Rookus platform using React.js, creating scalable components and delivering a smooth, modern user experience.",
        "Implemented secure authentication using JWT and bcrypt, along with role-based access control and secure session handling, following industry-standard security practices.",
        "Collaborated with team members using Git, contributing to organized development, version control, and efficient task management.",
          ]
    },
    {
      title: "B.Tech ECE",
      company: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      date: "Nov 2022 - June 2026",
      icon: <FaGraduationCap />,
      color: "#3B82F6",
      
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      "Next.js": <SiNextdotjs className="inline mr-1" />,
      "TypeScript": <SiTypescript className="inline mr-1 text-[#3178C6]" />,
      "AngularJS": <SiAngular className="inline mr-1 text-[#E23237]" />,
      "Docker": <SiDocker className="inline mr-1 text-[#0052CC]" />,
      "Postman": <SiPostman className="inline mr-1 text-[#FF6C37]" />,
      "Jira": <SiJira className="inline mr-1 text-[#0052CC]" />,
      "MongoDB": <SiMongodb className="inline mr-1 text-[#47A248]" />,
      "GitHub": <SiGithub className="inline mr-1" />,
      "Elastic Search": <SiElasticsearch className="inline mr-1 text-[#47A248]" />,
      "Node.js": <SiNodedotjs className="inline mr-1 text-[#339933]" />,

    };
    return icons[tech] || null;
  };

  return (
    <section className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white mb-16">Experience & Education</h2>
        
        <VerticalTimeline lineColor="#334155">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#1E293B', 
                color: '#fff',
                border: '1px solid #334155',
                borderRadius: '12px'
              }}
              contentArrowStyle={{ borderRight: '7px solid #1E293B' }}
              date={exp.date}
              dateClassName="text-gray-300"
              iconStyle={{ background: exp.color, color: '#fff' }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg text-primary mb-2">
                {exp.company}
              </h4>
              <p className="text-gray-400 mb-3">{exp.location}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center">
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2">
                {exp.points?.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceTimeline;