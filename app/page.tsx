import { Timeline } from "@/components/ui/timeline";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { SkillsSection } from "@/components/ui/skills-section";

const data = [
  {
    title: "2024 - Present",
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Software Developer, M&T Bank
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
            10/2024 – Present | Remote, USA
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Transaction Processing System
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Collaborated with cross-functional teams to design Transaction Processing and Settlement System, 
              processing 500,000+ daily transactions across ACH, wire transfers, and card payments.
            </p>
          </div>
          
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              High-Performance Backend
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Developed backend using Node.js and Express.js, handling 1M+ transactions daily, 
              reducing latency by 40% and improving throughput by 30%.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">20+ RESTful APIs</p>
              <p className="text-xs text-blue-600 dark:text-blue-300">99.99% uptime</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-green-800 dark:text-green-200">AES-256 Encryption</p>
              <p className="text-xs text-green-600 dark:text-green-300">PCI-DSS Compliance</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200">PostgreSQL Optimization</p>
              <p className="text-xs text-purple-600 dark:text-purple-300">50% faster queries</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-orange-800 dark:text-orange-200">AWS Deployment</p>
              <p className="text-xs text-orange-600 dark:text-orange-300">20% cost reduction</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2021 - 2022",
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Software Developer (Network), Capgemini
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
            02/2021 – 12/2022 | India
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Network Architecture for Tier 1 ISPs
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Engineered network architecture utilizing core networking algorithms for optimal routing 
              and spanning tree protocols, achieving 99.9% uptime and $500K annual cost savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">Kafka, Grafana, Nagios</p>
              <p className="text-xs text-indigo-600 dark:text-indigo-300">30% efficiency boost</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-teal-800 dark:text-teal-200">Kubernetes Optimization</p>
              <p className="text-xs text-teal-600 dark:text-teal-300">80% faster deployment</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-red-800 dark:text-red-200">Security Policies</p>
              <p className="text-xs text-red-600 dark:text-red-300">35% risk reduction</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              <strong>Key Achievements:</strong> Deployed geographical redundancy across 5 locations, 
              automated network tasks reducing manual errors by 40%, and improved CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2018 - 2021",
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Software Developer, Technokraft Solutions
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
            01/2018 – 02/2021 | India
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Scalable Web Applications
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Designed and implemented scalable web applications using Node.js and React.js for 
              enterprise network management solutions, achieving $300K operational cost savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-cyan-800 dark:text-cyan-200">RESTful APIs</p>
              <p className="text-xs text-cyan-600 dark:text-cyan-300">High availability & low latency</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Docker & Kubernetes</p>
              <p className="text-xs text-yellow-600 dark:text-yellow-300">99% service uptime</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-pink-800 dark:text-pink-200">Redis Caching</p>
              <p className="text-xs text-pink-600 dark:text-pink-300">Enhanced performance</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
              <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Database Optimization</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-300">40% faster response</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              <strong>Technologies:</strong> Node.js, React.js, Docker, Kubernetes, NGINX, Redis, 
              SQL & NoSQL databases with load balancing and microservices architecture.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const projectsContent = [
  {
    title: "🧸 BraveBuddy | Rutgers Health Hackathon",
    description: "Developed BraveBuddy, an AI-driven companion application to provide emotional support to pediatric cancer patients during chemotherapy, by integrating Whisper for speech-to-text transcription and GPT-4o for real-time empathetic tailored responses. Deployed the solution using AWS cloud services to ensure scalability, availability, and secure data handling—key factors in winning the hackathon. Incorporated machine learning techniques for predictive analytics and sentiment analysis.",
    content: (
      <div className="h-full w-full overflow-hidden rounded-md">
        <img 
          src="/images/bravebuddy.png" 
          alt="BraveBuddy - AI Companion for Pediatric Cancer Patients"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-end p-4">
          <a 
            href="https://github.com/Seninfarheen/BraveBuddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "☁️ Cloud File Storage",
    description: "Designed, developed, and deployed a cloud-based file management system using Node.js, Express, MongoDB, and HTML, delivering a robust and interactive platform with efficient data handling. Deployed using Docker and NGINX for load balancing, achieving high scaling consistency with GlusterFS and MongoDB Atlas, and ensured data security via SSL encryption and VPN protocols.",
    content: (
      <div className="h-full w-full overflow-hidden rounded-md">
        <img 
          src="/images/cloud_file_storage.png" 
          alt="Cloud File Storage System"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-end p-4">
          <a 
            href="https://github.com/viveksingh-98/web_ploject" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "🎵 Personal Media Server",
    description: "Designed and deployed a personal cloud server on Oracle Cloud Infrastructure (OCI), connecting on-premise services through a VPN tunnel. Implemented multithreaded read/write operations to enhance disk IOPS, and direct audio streaming (no compression), delivering high-fidelity playback up to 24-bit/192kHz.",
    content: (
      <div className="h-full w-full overflow-hidden rounded-md">
        <img 
          src="/images/personal_media_server.png" 
          alt="Personal Media Server on Oracle Cloud"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "🧠 AI-Powered Medical Diagnosis Tool",
    description: "Built a full-stack web application delivering AI-based diagnostic suggestions by analyzing symptoms using a Scikit-learn model. Engineered the backend with Python, Flask, and RESTful APIs, used SQLite for data management, and built a responsive frontend with HTML, CSS, and JavaScript.",
    content: (
      <div className="h-full w-full overflow-hidden rounded-md">
        <img 
          src="/images/medical_diagnosis_tool.png" 
          alt="AI-Powered Medical Diagnosis Tool"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-end p-4">
          <a 
            href="https://github.com/ketki-mude/Diagnosis_Evaluation_Tool/tree/parikshan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "🎬 Full-Stack Movie Review & Rating System",
    description: "Developed a full-stack movie review platform using Node.js, Express.js, and Handlebars.js, featuring server-side rendering, search, and watchlist features. Built secure user authentication with bcrypt, managed all data (users, movies, ratings) via MongoDB, and implemented RESTful routes for backend interactions.",
    content: (
      <div className="h-full w-full overflow-hidden rounded-md">
        <img 
          src="/images/movie_review_system.png" 
          alt="Full-Stack Movie Review System"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-end p-4">
          <a 
            href="https://github.com/NancyGuptaEr/CS546_Movie_Rating_System" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "🧮 Incremental Shortest Path Algorithm",
    description: "Implemented an efficient C++ program to solve the incremental shortest path problem in dynamic graphs. Used a min-priority heap with principles from Dijkstra's algorithm to calculate shortest paths as edges are added.",
    content: (
      <div className="h-full w-full overflow-hidden rounded-md">
        <img 
          src="/images/shortest_path_algo.png" 
          alt="Incremental Shortest Path Algorithm Visualization"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-end p-4">
          <a 
            href="https://github.com/ADITHYA797/Incremental-Shortest-Path" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ),
  },
];



export default function Home() {
  return (
    <div className="min-h-screen">
      <Timeline data={data} />
      
      {/* Projects Section */}
      <div className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Featured Projects
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-10">
            A collection of my notable projects showcasing various technologies and problem-solving approaches.
          </p>
        </div>
        <StickyScroll content={projectsContent} />
      </div>

      {/* Skills Section */}
      <div className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Technical Skills & Expertise
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-10">
            A comprehensive overview of my technical skills, tools, and certifications across various domains.
          </p>
        </div>
        <SkillsSection />
      </div>
    </div>
  );
}
