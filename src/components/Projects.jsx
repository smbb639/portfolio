import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiCss3, SiHtml5, SiNextdotjs, SiAwslambda, SiTypescript } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "Job Alert Bot",
      description: "Problem: Students often miss job opportunities because they must manually log in to the T&P portal for updates, and forgetting to check can result in missing application deadlines. Solution: Developed an automated Job Alert Bot that logs into the T&P portal and scrapes notifications, ensuring students receive timely updates through gmail.",
      // duration: "Dec 2024 - April 2025",
      tech: ["ReactJS", "Node.js", "MongoDB", "Flask", "Tailwind CSS"],
      icons: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiFlask />, <SiTailwindcss/>],
      points: [
        "Uses a Node.js script to log in to the BIT Mesra T&P portal and check for new job postings on an hourly schedule.",
        "Built with Express.js that stores subscriber emails and encrypted app-passwords in JSON and avoid duplicate alerts.",
        "Integrates Nodemailer to send personalized job-alert emails instantly when new listings are detected.",
        "Offers a minimal web form for users to subscribe plus health-check endpoints for uptime monitoring via UptimeRobot."
      ],
      links: {
        website: `https://tnp-alert.vercel.app`,
      }
    },
    {
      title: "Madhav",
      description: "Finverse is a premium, real-time personal finance dashboard designed to provide users with deep insights into their spending habits while keeping them connected to the pulse of the financial markets. Built with modern web technologies, it offers a seamless experience for tracking expenses, managing portfolios, and monitoring market indices.",
      duration: "March 2024 - March 2024",
      tech: ["Next.js", "TypeScript", "Node.js", "AWS EC2", "Nginx", "Gemini AI"],
      icons: [<SiNextdotjs />, <SiTypescript />, <SiNodedotjs />, <SiAwslambda />, "🧠"],
      points: [
        "Built a CI/CD pipeline using GitHub Actions, enabling automated and seamless deployments to AWS EC2 with secure SSH integration.",
        "Architected a production-ready backend using Node.js and Express, with Nginx as a reverse proxy and PM2 for process management, ensuring stable and reliable application performance.",
        "Enhanced dashboard experience using React Query and Recharts, enabling fast, near real-time updates for dynamic data visualization.",
        "Developed a unified platform for portfolio tracking and expense analytics, simplifying financial management and automating complex calculations for users.",
        "Integrated Google Gemini AI to power an intelligent chatbot, implementing secure authentication practices to ensure safe user interactions."
      ],
      links: {
        website: `https://finverse-1.vercel.app/`,
      }
    }
  ];

  return (
    <section className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-card"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {project.duration}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-1">
                    {project.icons[i]}
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                {project.links.website && (<a href={project.links.website} className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                )}
                {project.links.frontend && (<a href={project.links.frontend} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <FaGithub /> Frontend
                </a>)
                }
                {project.links.backend && (<a href={project.links.backend} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <FaGithub /> Backend
                </a>)
                }
              </div>
            </motion.div>
          ))}
         
          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="timeline-card lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">LeetCode</h4>
                  <p className="text-gray-300">Solved 500+ problems</p>
                  <p className="text-sm text-gray-400">Leetcode: Global Rank 1958 in Weekly Contest 456 (30k+ participants)</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">Hack-A-BIT Hackathon</h4>
                  <p className="text-gray-300">Top 5 among 50+ teams</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">GirlScript Summer of Code (GSSOC)
                  </h4>
                  <p className="text-gray-300">GSSOC 24 Contributor</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">Coding Profiles</h4>
                  <div className="flex gap-4 mt-2">
                    <a href={`https://leetcode.com/u/Shubham_15_/`} className="px-4 py-2 bg-yellow-600/20 rounded-lg hover:bg-yellow-600/30">
                      LeetCode
                    </a>
                    <a href={`https://www.geeksforgeeks.org/profile/babubisleri01`} className="px-4 py-2 bg-red-600/20 rounded-lg hover:bg-red-600/30">
                      GeeksforGeeks
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;