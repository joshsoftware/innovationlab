import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  GitBranch,
  Rocket,
  Users,
  ExternalLink,
  Github,
} from "lucide-react";

const AIExperiments = () => {
  const completedProjects = [
    {
      id: "1",
      name: "E-KYC Spoof",
      description:
        "This is a PoC project for eKYC spoofing. Analyse if this issue is real and are there solutions If not, identify a tool to showcase the spoof a person in video Try to spoof it on eKYS website Identify a tool or contribute to a tool which can detect the spoof Or build eKYC spoofing as a testing utility for liveness detection",
      tech: "Python, OBS",
      team: ["Anuj Verma", "Shubham Pradhan", "Monica"],
      repo: "https://github.com/joshsoftware/ekyc-spoof",
      demo: "https://blog.joshsoftware.com/2024/10/01/will-the-real-deepfake-please-stand-up/",
      gradient: "from-josh-blue to-josh-teal",
    },
    {
      id: "2",
      name: "Lingo.ai",
      description:
        "Lingo.ai project converts voice input from different Indian languages into text and uses advanced Natural Language Processing (NLP) to generate concise summaries. This solution is ideal for streamlining customer service, legal documentation, and managing multilingual data, helping businesses handle large volumes of voice data efficiently.",
      tech: "Python, NextJs, FastAPI, Whisper, LLama 3.2, Model fine tunning",
      team: [
        "Prajjwalkumar Panzade",
        "Sharyu Marwadi",
        "Sourabh Bharale",
        "Vishwajeetsingh Desurkar",
      ],
      repo: "https://github.com/joshsoftware/lingo.ai",
      demo: "https://lingo.ai.joshsoftware.com",
      gradient: "from-josh-teal to-josh-orange",
    },
    {
      id: "3",
      name: "Loglytics",
      description:
        "An AI-driven error log analyzer which identifies the cause of the error, steps to resolve the error, and the impact on business.",
      tech: "Ollama, FastAPI, Llama 3, NextJS",
      team: ["Ajinkya Karanjikar", "Aniket Gore"],
      repo: "https://github.com/joshsoftware/ErrorLogAnalyser",
      demo: "https://loglytics.joshsoftware.com/",
      gradient: "from-josh-purple to-josh-blue",
    },
  ];

  const ongoingProjects = [
    {
      id: "1",
      name: "Support Hawk",
      description:
        "Empowering customer conversations in their local language with tailored contextual understanding",
      tech: "Python, RoR, NextJS, LLama 3, AI4Bharat, Qdrant (Vector DB), RAG",
      team: [
        "Sourabh Bharale",
        "Prajjwalkumar Panzade",
        "Vishwajeetsingh Desurkar",
        "Abhijeet Lokhande",
      ],
      repo: "https://github.com/joshsoftware/SupportHawk/",
      demo: "https://support-hawk.joshsoftware.com",
      gradient: "from-josh-orange to-josh-purple",
    },
    {
      id: "2",
      name: "Lingo.ai (Enhanced)",
      description:
        "Lingo.ai project converts voice input from different Indian languages into text and uses advanced Natural Language Processing (NLP) to generate concise summaries. This solution is ideal for streamlining customer service, legal documentation, and managing multilingual data, helping businesses handle large volumes of voice data efficiently.",
      tech: "Python, NextJs, FastAPI, Whisper, LLama 3.2, Model fine tunning",
      team: [
        "Prajjwalkumar Panzade",
        "Sourabh Bharale",
        "Yash Shah",
        "Shubham Pradhan",
        "Malhar Jadhav",
        "Abhijeet Lokhande",
      ],
      repo: "https://github.com/joshsoftware/lingo.ai",
      demo: "https://lingo.ai.joshsoftware.com",
      gradient: "from-josh-blue to-josh-purple",
    },
    {
      id: "3",
      name: "AiCruit",
      description:
        "AI-powered analysis of candidate interviews against job descriptions, delivering detailed insights for recruitment teams",
      tech: "Python, NextJS, LLama 3, Faster Whisper, NeMo (Speaker Diarization), Prompt Engineering",
      team: ["Rohan Dhalpe", "Sumit Done"],
      repo: "https://github.com/joshsoftware/aicruit/",
      demo: "",
      gradient: "from-josh-teal to-josh-blue",
    },
  ];

  const ProjectCard = ({ project, status }) => (
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white rounded-3xl overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
          >
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  status === "completed"
                    ? "bg-green-500"
                    : "bg-blue-500 animate-pulse"
                }`}
              ></div>
              {status === "completed" ? "Completed" : "In Progress"}
            </div>
          </div>
        </div>
        <CardTitle className="text-2xl font-display font-bold text-josh-gray-900 mb-3 group-hover:text-josh-blue transition-colors">
          {project.name}
        </CardTitle>
        <div className="flex items-center text-sm text-josh-gray-500 mb-4">
          <Users className="w-4 h-4 mr-2" />
          <span>{project.team.length} team members</span>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <CardDescription className="text-josh-gray-600 leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </CardDescription>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-josh-gray-900 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.split(", ").map((tech, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 bg-josh-gray-100 text-josh-gray-700 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-josh-gray-900 mb-2">
            Team
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.team.map((member, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 bg-gradient-to-r from-josh-blue/10 to-josh-teal/10 text-josh-blue rounded-full text-xs font-medium"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-josh-gray-900 text-white rounded-xl text-sm font-medium hover:bg-josh-gray-800 transition-colors group/link"
          >
            <Github className="w-4 h-4 mr-2 group-hover/link:rotate-12 transition-transform" />
            Repository
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-josh-blue to-josh-teal text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all group/link"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover/link:rotate-12 transition-transform" />
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-32 bg-gradient-to-br from-josh-gray-50/30 via-white to-josh-blue/5">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-josh-gray-900 mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-josh-gray-600 max-w-3xl mx-auto font-medium">
            Innovative solutions built by our talented team, pushing the
            boundaries of technology and creativity.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mr-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold text-josh-gray-900">
              Completed Projects
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                status="completed"
              />
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div>
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold text-josh-gray-900">
              Projects in Progress
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {ongoingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                status="ongoing"
              />
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-josh-blue via-josh-teal to-josh-orange p-1 rounded-3xl inline-block">
            <div className="bg-white rounded-3xl px-12 py-8">
              <h3 className="text-2xl font-display font-bold text-josh-gray-900 mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-josh-gray-600 mb-6 max-w-md mx-auto">
                Be part of innovative projects that make a difference. Join our
                community of passionate developers.
              </p>
              <a
                href="https://forms.gle/m7idVXhbYbWneNRb7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-josh-blue to-josh-teal text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-3" />
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExperiments;
